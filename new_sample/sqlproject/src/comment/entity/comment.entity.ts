// comment.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Board } from './board.entity';

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    comment_id: number;

    @Column()
    content: string;

    @ManyToOne(() => Board, (board) => board.comments)
    @JoinColumn({ name: 'board_index' })
    board: Board;
}