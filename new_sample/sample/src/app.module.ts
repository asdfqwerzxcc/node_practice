import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user/entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService} from '@nestjs/config'
// import configuration from './config/configuration';
import * as dotenv from 'dotenv';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
dotenv.config();
@Module({
  imports: [
    // ConfigModule.forRoot({
      // isGlobal:true,
      // load: [configuration]
    // }),
    TypeOrmModule.forRoot({    
        type: 'mysql',
        host: process.env.host,
        port: 3306,
        username: 'root',
        password: process.env.password, // 중요 내용은 .env파일에서 관리해야함
        database: 'testtest',
        entities: [User], //엔티티 생성시 주입해야함
        synchronize: false, //false로 관리})
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
