import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

//DB에 기록한 형식의 테이블 주입
@Entity({ name: 'User_info' })
export class User{
    @PrimaryGeneratedColumn()
    index: Number;
    
    @Column({unique:true})
    id : string;

    @Column()
    passwd: string;

    @Column()
    name: string;

}