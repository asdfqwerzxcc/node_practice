import { Controller, Get,Post,Body } from '@nestjs/common';
import { UserService } from './user.service';
import {  findByid } from './dto/user.dto';
import { User } from './entity/user.entity';

@Controller('user')
export class UserController {
    constructor(private userService:UserService){}
    @Post('create')
    async createUser(@Body()User:User){
        return this.userService.createUser(User);
    }
    // @Get()
    // getallUser(){
    //     return this.userService.getallUser();
    // }
    // @Post()
    // getoneUser(@Body()id:findByid){
    //     return this.userService.getoneUser(id);
    // }
    // @Post('delete')
    // async deleteuser(@Body() id:findByid){
    //     this.userService.deleteUser(id);
    //     return this.userService.getallUser();
    // }
    // @Post('update')
    // async updateUser(@Body() User:User){
    //     await this.userService.updateUser(User);
    //     return this.userService.getallUser();
    // }
    @Post('login')
    async LogIn(@Body() User:User){
        // await this.userService.Login(User);
        return await this.userService.login(User);
    }
}
