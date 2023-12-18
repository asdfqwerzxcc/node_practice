import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubBoard } from './entity/subboard.entity';
import { Repository } from 'typeorm';
import { CommentDTO, SubBoards } from './dto/SubBoard.dto';


@Injectable()
export class SubboardService {
    constructor(@InjectRepository(SubBoard) private SubBoardRepository: Repository<SubBoard>) { }

    // async create(commetDetail: SubBoards) {
    //     // const entity=this.SubBoardRepository.findOne({select: {Comment_index:true},where:{Board_index: commetDetail.Board_index}});
    //     // console.log(this.SubBoardRepository.find({where:{Comment_index:commetDetail.direct}})===null)
    //     const compare = await this.SubBoardRepository.find({ where: { Comment_index: commetDetail.direct, Board_index: commetDetail.Board_index } })
    //     //direct값이 없을시 0으로 이동
    //     if (compare.length <= 0) {

    //         commetDetail.direct = 0;
    //         console.log(commetDetail.direct + "1");

    //     }

    //     console.log(commetDetail);

    //     //comment_index +1 하기
    //     const result = await this.SubBoardRepository.createQueryBuilder('subBoard')
    //         .select('MAX(subBoard.Comment_index)', 'maxValue')
    //         .where('subBoard.Board_index = :boardIndex', { boardIndex: commetDetail.Board_index })
    //         .getRawOne();
    //     const newCommet = { Comment_index: (await result).maxValue + 1 };

    //     // const data = { Board_index: 1, commet: '6', direct: 0 };
    //     //데이터 합치기
    //     const newData = { ...commetDetail, ...newCommet };
    //     console.log(newData);

    //     const newC = this.SubBoardRepository.create({
    //         ...newData
    //     });
    //     return this.SubBoardRepository.save(newC);
    // }
    // // async config(commetDetail:SubBoards){
    // //     const compare=await this.SubBoardRepository.find({where:{Comment_index:commetDetail.direct}})

    // //     if(compare.length<=0)
    // //     {

    // //         commetDetail.direct=0;
    // //         console.log(commetDetail.direct+"1");

    // //     }    }
    // async delete(commetDetail: SubBoard) {
    //     // console.log(commetDetail);
    //     while (true) {

    //         const compare = await this.SubBoardRepository.find(
    //             {
    //                 where: {
    //                     direct: commetDetail.Comment_index,
    //                     Board_index: commetDetail.Board_index
    //                 }
    //             })
    //         const deleteUser = await this.SubBoardRepository.delete(
    //             commetDetail.index
    //         );
    //         commetDetail=compare[0]
    //         if (compare.length == 0) {
    //             break;
    //             //     if (deleteUser.affected === 0) {
    //             //     }}

    //             // }else{
    //             //     const deleteUser = await this.SubBoardRepository.delete(
    //             //         commetDetail.index
    //             //     );
    //             // }
    //         } 
    //     }

    // }
    async create(commentDTO: CommentDTO) {
        const comment = this.SubBoardRepository.create(commentDTO);
        console.log(commentDTO, ',', comment)

        return this.SubBoardRepository.save(comment);
    }

    // async findAllCommentsByBoard(index: number): Promise<Comment[]> {
    //     return this.SubBoardRepository.find({ where: { board: { index } } });
    // }

    // async deleteComment(comment_id: number): Promise<void> {
    //     await this.SubBoardRepository.delete(comment_id);
    // }
}