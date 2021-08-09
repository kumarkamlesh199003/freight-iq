import {BeforeInsert, Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
//import { scrypt } from 'crypto';

@Entity('login_post')
export class LoginPostEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ 
        type: 'varchar', 
        nullable: false 
    })
    emailId: string;

    @Column({ 
        type: 'varchar', 
        nullable: false 
    })
    password: string;

    @Column({
        type: 'timestamp', 
        default: () => 'CURRENT_TIMESTAMP'
    })
    createdAt: Date; 
    
    // @BeforeInsert() async hashPassword(){
    //     this.password = await bcrypt.hash(this.password, 10);
    // }

}