import { Repository } from "typeorm";
// import { AuthCredentialsDto } from "./dto/auth-credential.dto";
import { User } from "./entity/user.entity";
import { AuthCredentialsDto } from "src/auth/dto/auth_credential.dto";
import { ConflictException, Injectable } from "@nestjs/common";
import * as bcrypt from 'bcryptjs';
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class UserRepository  {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>) {}
  
  
    
    async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const {username, password} = authCredentialsDto;
    
    const salt = await bcrypt.genSalt();
    const hasedPassword = await bcrypt.hash(password, salt);

    const user = this.userRepository.create({username, password: hasedPassword});
    
    try {
        await this.userRepository.save(user);
    } catch (error) {
        if (error.code === '23305') {
            throw new ConflictException('Existing username');
        } else {
            console.log('error', error);
        }
    }    
}
}

// @EntityRepository(User)
// export class UserRepository extends Repository<User> {
//     async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
//         const {username, password} = authCredentialsDto;
        
//         const salt = await bcrypt.genSalt();
//         const hasedPassword = await bcrypt.hash(password, salt);

//         const user = this.create({username, password: hasedPassword});
        
//         try {
//             await this.save(user);
//         } catch (error) {
//             if (error.code === '23305') {
//                 throw new ConflictException('Existing username');
//             } else {
//                 console.log('error', error);
//             }
//         }    
//     }
// }