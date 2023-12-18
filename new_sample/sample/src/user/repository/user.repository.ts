import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/user/entity/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class userRepository{
    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }
    
    //create
    async create(userDetails:User){
        const newuser=this.userRepository.create({
            ...userDetails,
        })
        return this.userRepository.save(newuser)
    }

    async Login(user:User){
        const entity= await this.userRepository.findOne({where:({id:user.id,passwd:user.passwd})});
        return entity;
    }

    async findOne(user:User){
        console.log("repo");
        const entity=await this.userRepository.findOne({where:({id:user.id})});
        return entity
    }
}
