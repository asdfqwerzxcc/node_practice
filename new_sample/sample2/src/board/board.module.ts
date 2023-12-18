import { Module } from '@nestjs/common';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Board from './entity/board.entity';
import { SubBoard } from 'src/subboard/entity/subboard.entity';
import { SubboardModule } from 'src/subboard/subboard.module';


@Module({
  imports: [TypeOrmModule.forFeature([Board, SubBoard])],
  controllers: [BoardController],
  providers: [BoardService]
})
export class BoardModule { }
