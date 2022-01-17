import {Module} from "@nestjs/common";
import {FileService} from "./file.service";
import { ConfigModule, ConfigService} from '@nestjs/config';
import * as Joi from '@hapi/joi';
@Module({
    providers: [FileService, ConfigService],
    imports: [
        ConfigModule.forRoot({
            validationSchema: Joi.object({
              AWS_REGION: Joi.string().required(),
              AWS_ACCESS_KEY_ID: Joi.string().required(),
              AWS_SECRET_ACCESS_KEY: Joi.string().required(),
            })
          }),
    ],

})
export class FileModule {}