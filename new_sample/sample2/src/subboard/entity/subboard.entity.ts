import Board from "src/board/entity/board.entity";
import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "subboard_info" })
export class SubBoard {
    @PrimaryGeneratedColumn()
    comment_id: number;

    @Column()
    content: string;

    @ManyToOne(() => Board, (board) => board.comments)
    @JoinColumn({ name: 'board_index' })
    board: Board;

}