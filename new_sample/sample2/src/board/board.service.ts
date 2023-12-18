import { Injectable } from '@nestjs/common';
import Board from './entity/board.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { getByIndex, updateBoard } from './dto/Board.dto';
import { SubBoard } from 'src/subboard/entity/subboard.entity';



@Injectable()
export class BoardService {
    constructor(@InjectRepository(Board) private BoardRepository: Repository<Board>,
        @InjectRepository(SubBoard) private SubBoardRepository: Repository<SubBoard>) { }

    create(BoardDetail: Board) {
        const newBoard = this.BoardRepository.create({
            ...BoardDetail,

        });
        return this.BoardRepository.save(newBoard);
    }

    getAllBoard() {
        return this.BoardRepository.find();
    }

    getByIndex(Boardindex: getByIndex) {
        // const index1:number=Boardindex.index;
        // parseInt(Boardindex);
        console.log(typeof (Boardindex.index));
        const index1 = Number(Boardindex.index);
        console.log(typeof (index1))
        const IndexBoard = this.BoardRepository.find({ where: { index: index1 } });
        return IndexBoard;
    }
    async deleteBoard(index: getByIndex) {

        // const deletecommet = await this.SubBoardRepository.delete(
        //     { index: index.index }
        // );

        const deleteBoard = await this.BoardRepository.delete(
            index
        );


        if (deleteBoard.affected === 0) {
        }
    }

    // async updateBoard(index: getByIndex, Board: updateBoard) {
    //     const index1 = Number(index.index);

    //     // const entity=await this.BoardRepository.update(index1,Board);
    //     // console.log(entity)
    //     await this.BoardRepository.update(index1, Board);
    //     return this.getByIndex(index);
    //     // let newEntity = {
    //     //   ...entity,
    //     //   ...Board
    //     // };
    //     // console.log(newEntity);
    //     // await this.BoardRepository.save(newEntity)

    // }
    // async



}
