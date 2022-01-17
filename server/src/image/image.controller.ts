import { Controller, Get, Param, Res } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";


@Controller('/image')
export class ImageController {
    constructor(private configService: ConfigService) {    }

    @Get(':filename')
    redirect(@Param('filename') filename: string, @Res() res){
        return res.redirect( this.configService.get('CLOUDFRONT') +'/image/' + filename);
    }
}
