import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity('usuarios')
class Usuario {

    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    cpf: string;

    @Column({name: 'is_admin'})
    isAdmin?: boolean;

    @CreateDateColumn({name: 'created_at'})
    createdAt?: Date;

    constructor () {
        if(!this.id){
            this.id = uuidV4();
            this.createdAt = new Date();
            this.isAdmin = false;
        }

    }
}

export { Usuario };