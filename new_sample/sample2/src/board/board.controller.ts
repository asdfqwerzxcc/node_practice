import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { BoardService } from './board.service';
import Board from './entity/board.entity';
import { getByIndex, updateBoard } from './dto/Board.dto';

@Controller('board')
export class BoardController {
    constructor(private BoardService: BoardService) { }

    @Post('create')
    async create(@Body() newBoard: Board) {
        return this.BoardService.create(newBoard);
    }

    @Get()
    async getAll() {
        return this.BoardService.getAllBoard();
    }

    @Get('/:index')
    async getBoard(@Param() index: getByIndex) {
        console.log(typeof (index));
        return this.BoardService.getByIndex(index);
    }

    @Get('delete/:index')
    async deleteBoard(@Param() index: getByIndex) {
        return this.BoardService.deleteBoard(index);

    }

    // @Post('update/:index')
    // async updateBoard(@Param() Index: getByIndex, @Body() updatedetail: updateBoard) {
    //     return this.BoardService.updateBoard(Index, updatedetail);

    // }

}
