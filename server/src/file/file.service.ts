import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import * as path from 'path'
import { ConfigService } from '@nestjs/config';
import * as uuid from 'uuid'
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";


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
            const s3client = new S3Client({region: this.configService.get('AWS_REGION')});
            const fileExtension =  path.extname(file.originalname) //file.originalname.split('.').pop()
            const fileName = uuid.v4() + fileExtension

            const uploadParams = {
                Bucket: this.configService.get('AWS_PUBLIC_BUCKET_NAME'),
                Body: file.buffer,
                Key: type + '/' + fileName
              }        
            s3client.send(new PutObjectCommand(uploadParams))        
            return type + '/' + fileName

        } catch (e) {
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}