import {Module} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AudioController } from "./audio.controller";


@Module({
    providers: [ ConfigService],
    controllers: [AudioController],
    
})
export class AudioModule {}