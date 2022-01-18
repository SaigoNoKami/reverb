import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import * as path from 'path'
import { ConfigService } from '@nestjs/config';
import * as uuid from 'uuid'
import * as AWS from 'aws-sdk'
const stream = require('stream');

export enum FileType {
    AUDIO = 'audio',
    IMAGE = 'image'
}

@Injectable()
export class FileService{
    constructor(
        private readonly configService: ConfigService
      ) {}
    createFile(type: FileType, file): string {
        try {
            const fileExtension =  path.extname(file.originalname) 
            const fileName = uuid.v4() + fileExtension

            const uploadStream = ({ Bucket}) => {
                const s3 = new AWS.S3();
                const pass = new stream.PassThrough();
                const uploadParams = {
                    Bucket: this.configService.get('AWS_PUBLIC_BUCKET_NAME'),
                    Body: pass,
                    Key: type + '/' + fileName
                  }    
                return {
                  writeStream: pass,
                  promise: s3.upload(uploadParams).promise(),
                };
              }

              const { writeStream, promise } = uploadStream({Bucket: 'AWS_PUBLIC_BUCKET_NAME'})
              const readStream = stream.Readable.from(file.buffer)
              const pipeline = readStream.pipe(writeStream);

              
                
            return type + '/' + fileName

        } catch (e) {
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}