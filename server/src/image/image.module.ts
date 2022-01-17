import {Module} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ImageController } from "./image.controller";

@Module({
    providers: [ ConfigService],
    controllers: [ImageController],
    
})
export class ImageModule {}