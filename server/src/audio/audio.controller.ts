import { Controller, Get, Param, Res } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Controller('/audio')
export class AudioController {
    constructor(private configService: ConfigService) {    }

    @Get(':filename')
    redirect(@Param('filename') filename: string, @Res() res){
        return res.redirect( this.configService.get('CLOUDFRONT') +'/audio/' + filename);
    }
}
