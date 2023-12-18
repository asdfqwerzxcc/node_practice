import { Controller, Post,Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/user/entity/user.entity';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}
    @Post('/signin')
    signIn(@Body() authCredentialsDto: User) {
        return this.authService.singIn(authCredentialsDto);
    }
}
