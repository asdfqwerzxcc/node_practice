import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Passport } from 'passport';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userRepository } from '../user/repository/user.repository';
// import { User } from 'src/user/entity/user.entity';

@Module({
  imports: [
    PassportModule.register({defaultStrategy:'jwt'}),
    JwtModule.register({
      secret:'secert1234',
      signOptions:{
        expiresIn: 60*60,
      }
    }),
    TypeOrmModule.forFeature([userRepository]) 
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
