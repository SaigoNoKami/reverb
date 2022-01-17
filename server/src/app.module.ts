import {Module} from "@nestjs/common";
import {TrackModule} from "./track/track.module";
import {MongooseModule} from "@nestjs/mongoose";
import {FileModule} from "./file/file.module";
import { ConfigModule, ConfigService} from '@nestjs/config';
import { ImageModule } from "./image/image.module";
import { AudioModule } from "./audio/audio.module";

const isPropertyString = (obj, field) => obj[field] && typeof obj[field] === 'string';

@Module({
    providers: [ ConfigService],
    imports: [ 
        TrackModule,
        MongooseModule.forRoot(process.env.Mongo_KEY),
        FileModule,
        ImageModule,
        AudioModule,
        ConfigModule.forRoot({
            validationSchema: {
                validate: (config) => {
                    return isPropertyString(config, 'Mongo_KEY') &&
                           isPropertyString(config, 'AWS_REGION') &&
                           isPropertyString(config, 'AWS_ACCESS_KEY_ID') &&
                           isPropertyString(config, 'AWS_SECRET_ACCESS_KEY') &&
                           isPropertyString(config, 'AWS_PUBLIC_BUCKET_NAME') &&
                           isPropertyString(config, 'CLOUDFRONT');                    
                }
            }
          }),
    ]
})
 
export class AppModule{
}

