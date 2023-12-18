import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { AuthController } from 'src/auth/auth.controller';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports:[TypeOrmModule.forFeature([UserRepository])],
  controllers: [UserController,AuthController],
  providers: [UserService,AuthService]
})
export class UserModule {}
