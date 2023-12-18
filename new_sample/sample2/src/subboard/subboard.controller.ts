import { Controller, Body, Post } from '@nestjs/common';
import { SubboardService } from './subboard.service';
import { SubBoard } from './entity/subboard.entity';
import { CommentDTO, SubBoards } from './dto/SubBoard.dto';

@Controller('subboard')
export class SubboardController {
    constructor(private SubboardService: SubboardService) { }

    @Post('create')
    create(@Body() Comment: CommentDTO) {
        console.log(Comment);
        return this.SubboardService.create(Comment);
    }
    // @Post('delete')
    // delete(@Body() comment: SubBoard) {
    //     console.log(comment)
    //     return this.SubboardService.delete(comment);
    // }
}
