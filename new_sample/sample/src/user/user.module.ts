import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {User} from './entity/user.entity'
import { TypeOrmModule } from '@nestjs/typeorm';
import { userRepository } from './repository/user.repository';


@Module({
  imports:[TypeOrmModule.forFeature([User]),],
  controllers: [UserController],
  providers: [UserService, userRepository]
})
export class UserModule {}
