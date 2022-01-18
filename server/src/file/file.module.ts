import {Module} from "@nestjs/common";
import {FileService} from "./file.service";
import { ConfigModule, ConfigService} from '@nestjs/config';

@Module({
    providers: [FileService, ConfigService],
    imports: [
        ConfigModule.forRoot({}),
    ],

})
export class FileModule {}