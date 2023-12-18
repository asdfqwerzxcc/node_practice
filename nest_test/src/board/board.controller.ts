import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Board ,BoardStatus} from './board.model';
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {
    constructor(private boardService: BoardService){}

    @Get()
    getAllBoard(): Board[]{
        
        return this.boardService.getAllBoard();
    }
    @Post()
    createBoard(
        @Body('id') id :string,
        @Body('title') title : string,
        @Body('description') description:string,
    ):Board{
        return this.boardService.createBoard(id,title,description)
    }
    @Get('/:id')
    getBoardByid(
        @Param('id') id: string): Board {
            return this.boardService.getBoardById(id);}
   
    @Delete('/:id')
    deleteBoard(@Param('id') id: string): void{
        this.boardService.deleteBoard(id);
    }
    @Patch("/:id/:status")
    updateBoard(@Param('id') id: string,
                @Param('status') status: BoardStatus ):void{
        this.boardService.updateBoard(id,status);
    }

}
