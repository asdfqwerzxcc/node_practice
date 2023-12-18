import { SubBoard } from 'src/subboard/entity/subboard.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'board_info' })
class Board {
    @PrimaryGeneratedColumn()
    index: number;

    @Column()
    title: string;

    @Column()
    content: string;

    // @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    // created_at: Date;

    // @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    // updated_at: Date;

    @OneToMany(() => SubBoard, (subBoard) => subBoard.board)
    comments: SubBoard[];
}
export default Board;