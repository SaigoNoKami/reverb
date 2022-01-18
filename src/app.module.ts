import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from './config';

const isPropertyString = (obj, field) =>
  obj[field] && typeof obj[field] === 'string';

@Module({
  providers: [ConfigService],
  imports: [
    TrackModule,
    MongooseModule.forRoot(process.env.Mongo_KEY),
    FileModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      validationSchema: {
        validate: (config) => {
          return (
            isPropertyString(config, 'AWS_REGION') &&
            isPropertyString(config, 'AWS_ACCESS_KEY_ID') &&
            isPropertyString(config, 'AWS_SECRET_ACCESS_KEY') &&
            isPropertyString(config, 'Mongo_KEY')
          );
        },
      },
    }),
  ],
})
export class AppModule {}
