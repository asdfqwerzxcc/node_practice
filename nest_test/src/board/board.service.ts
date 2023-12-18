import { Injectable } from '@nestjs/common';
import { Board,BoardStatus } from './board.model';

@Injectable()
export class BoardService {
    private board:Board[]=[];

    getAllBoard():Board[]{
        return this.board;
    }
    createBoard(id : string,title: string, description: string): Board {
        const board: Board = {
          id,
          title,
          description,
          status: BoardStatus.PUBLIC,
        };
    
        this.board.push(board);
        return board;
      }
    getBoardById(id: string):Board{
        return this.board.find((board)=>board.id===id);
    }
    deleteBoard(id:string):void{
        this.board=this.board.filter((board)=>board.id!==id);
    }
    updateBoard(id: string, status : BoardStatus){
        const Board = this.getBoardById(id);
        Board.status=status 
        return  Board
    }
}
