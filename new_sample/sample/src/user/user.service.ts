import { Injectable, NotFoundException } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { findByid } from './dto/user.dto';
import { User } from './entity/user.entity';
import { userRepository } from './repository/user.repository';

@Injectable()
export class UserService {
    constructor(private userRepository: userRepository) { }
    
    // private users : User[]=[];
    //create
    createUser(userDetails:User){

        return this.userRepository.create(userDetails);
    }
    // //findall
    // getallUser(){
    //     return this.userRepository.find();
    // }
    // //find
    // async getoneUser(getid:findByid){
    //     const obj=getid.id;
    //     console.log(this.userRepository.find({where:{ id: obj }}));
    //     // const _getid = getid as unknown as string;
    //     return await this.userRepository.find({where:{ id: obj }});
    // }
    // //delete
    // async deleteUser(id:findByid){

    //     const deleteUser=await this.userRepository.delete(
    //       id
    //     );
    //     if (deleteUser.affected === 0) {
    //       }         
    // }
    // //update
    // async updateUser(userupdate:User){
    //     const entity = await this.userRepository.findOne({where:({id:userupdate.id})});
  
    //     let newEntity = {
    //       ...entity,
    //       ...userupdate
    //     };
        
    //     await this.userRepository.save(newEntity)
    // }
    async login(user:User){

        this.userRepository.Login(user);
        return this.userRepository.Login(user);

    }


  
        
          
}
