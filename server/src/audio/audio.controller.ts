import { Controller, Get, Param, Res } from "@nestjs/common";




@Controller('/audio')
export class AudioController {
    constructor() {    }

    @Get(':filename')
    redirect(@Param('filename') filename: string, @Res() res){
        return res.redirect('http://diw4nk35u3ll.cloudfront.net/audio/' + filename);
    }
}
