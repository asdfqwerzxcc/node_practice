import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubboardModule } from './subboard/subboard.module';
import Board from './board/entity/board.entity';
import * as dotenv from 'dotenv';
import { SubBoard } from './subboard/entity/subboard.entity';
dotenv.config();


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: process.env.password, // 중요 내용은 .env파일에서 관리해야함
      database: 'test',
      entities: [Board, SubBoard], //엔티티 생성시 주입해야함
      synchronize: true, //false로 관리})
    }), SubboardModule, BoardModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
