import { Telefone } from "@modules/telefone/infra/typeorm/entities/Telefone";
import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
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

    @OneToMany(() => Telefone, telefone => telefone.user)
    phones: Telefone[];

    constructor () {
        if(!this.id){
            this.id = uuidV4();
            this.createdAt = new Date();
            this.isAdmin = false;
        }
    }
}

export { Usuario };