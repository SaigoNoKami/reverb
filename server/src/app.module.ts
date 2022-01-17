import {Module} from "@nestjs/common";
import {TrackModule} from "./track/track.module";
import {MongooseModule} from "@nestjs/mongoose";
import {FileModule} from "./file/file.module";
import * as Joi from '@hapi/joi';
import { ConfigModule, ConfigService} from '@nestjs/config';
import { ImageModule } from "./image/image.module";
import { AudioModule } from "./audio/audio.module";


@Module({
    providers: [ ConfigService],
    imports: [ 
        TrackModule,
        MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.bz042.mongodb.net/reverb?retryWrites=true&w=majority'),
        FileModule,
        ImageModule,
        AudioModule,
        ConfigModule.forRoot({
            validationSchema: Joi.object({
              AWS_REGION: Joi.string().required(),
              AWS_ACCESS_KEY_ID: Joi.string().required(),
              AWS_SECRET_ACCESS_KEY: Joi.string().required(),
            })
          }),
    ]
    
    

})

export class AppModule{
}

