import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entity/user.entity';
import { userRepository } from 'src/user/repository/user.repository';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(
        //@InjectRepository(userRepository)
        private userRepository: userRepository,
        private jwtService: JwtService
    ) {}
    async singIn(user:User){ 
        //console.log(userRepository);
        // return userRepository.findOne()
        const{id,passwd,name}=user;
        let user1=await this.userRepository.findOne(user)
        if (user && (await bcrypt.compare(passwd, user1.passwd))) {
            // 유저 토큰 생성
            const payload = { id };
            const accessToken = await this.jwtService.sign(payload);

            return { accessToken };
        } 
        else {
            throw new UnauthorizedException('login failed');
        }
    }
}
