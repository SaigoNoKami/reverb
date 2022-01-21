
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';

import { Track, TrackDocument } from './schemas/track.schema';
import { Model, ObjectId } from 'mongoose';
import { Comment, CommentDocument } from './schemas/comment.schema';
import { CreateTrackDto } from './dto/create-track.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { FileService, FileType } from '../file/file.service';

import * as mongoose from 'mongoose';

const MAGIC_NUMBERS = {
  jpg: 'ffd8ffe0',
  jpg1: 'ffd8ffe1',
  png: '89504e47',
  gif: '47494638',
  mp3: '49443303',
};

function checkMagicNumbers(magic) {
  if (
    magic == MAGIC_NUMBERS.jpg ||
    magic == MAGIC_NUMBERS.jpg1 ||
    magic == MAGIC_NUMBERS.png ||
    magic == MAGIC_NUMBERS.gif
  )
    return true;
}


@Injectable()
export class TrackService {
  constructor(
    @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,

    @InjectConnection() private readonly connection: mongoose.Connection,
    private fileService: FileService,
  ) {}

  async create(dto: CreateTrackDto, picture, audio): Promise<Track> {
    const audioPath = this.fileService.createFile(FileType.AUDIO, audio);
    const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
    const magicPicture = picture.buffer.toString('hex', 0, 4);

    const magicAudio = audio.buffer.toString('hex', 0, 4);
    if (!checkMagicNumbers(magicPicture) || magicAudio != MAGIC_NUMBERS.mp3) {
      throw new BadRequestException('invalid req');
    }
    const track = await this.trackModel.create({
      ...dto,
      listens: 0,
      audio: audioPath,
      picture: picturePath,
    });
    return track;
  }

  async getAll(count = 10, offset = 0): Promise<Track[]> {
    const tracks = await this.trackModel
      .find()
      .skip(Number(offset))
      .limit(Number(count));
    return tracks;
  }

  async getOne(id: ObjectId): Promise<Track> {
    const track = await this.trackModel.findById(id).populate('comments');
    return track;
  }

  async delete(id: ObjectId): Promise<ObjectId> {
    const track = await this.trackModel.findByIdAndDelete(id);
    return track._id;
  }

  async addComment(dto: CreateCommentDto): Promise<Comment> {
    const transactionSession = await this.connection.startSession();
    transactionSession.startTransaction();
    try {
      const track = await this.trackModel.findById(dto.trackId);
      const comment = await this.commentModel.create({ ...dto });
      track.comments.push(comment._id);
      await track.save();
      return comment;
    } catch (err) {
      transactionSession.abortTransaction();
      transactionSession.endSession();
      throw new BadRequestException('err');
    } finally {
      transactionSession.endSession();
    }
  }

  async listen(id: ObjectId) {
    const track = await this.trackModel.findById(id);
    if (!track) {
      throw new NotFoundException('Invalid track');
    }
    track.listens++;
    track.save();
  }


  async search(query: string): Promise<Track[]> {
    const tracks = await this.trackModel.find({
      name: { $regex: new RegExp(query, 'i') },
    });
    return tracks;
  }
}
