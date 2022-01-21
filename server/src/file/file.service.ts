import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as uuid from 'uuid';
import * as AWS from 'aws-sdk';
import * as stream from 'stream';

export enum FileType {
  AUDIO = 'audio',
  IMAGE = 'image',
}


@Injectable()
export class FileService {
  constructor(private readonly configService: ConfigService, private readonly AWS: AWS.S3) {}
  createFile(type: FileType, file): string {
    try {
      const fileName = uuid.v4();
      
      const uploadStream = () => {
        const pass = new stream.PassThrough();
        const uploadParams = {
          Bucket: this.configService.get('AWS_PUBLIC_BUCKET_NAME'),
          Body: pass,
          Key: type + '/' + fileName,
        };
        return {
          writeStream: pass,
          promise: this.AWS.upload(uploadParams).promise(),
        };
      };

      const { writeStream, promise } = uploadStream();
      const readStream = stream.Readable.from(file.buffer);
      const pipeline = readStream.pipe(writeStream);

      return type + '/' + fileName;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
