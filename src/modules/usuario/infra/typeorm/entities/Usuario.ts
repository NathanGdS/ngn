import { Telefone } from "@modules/telefone/infra/typeorm/entities/Telefone";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("usuarios")
class Usuario {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    rg: string;

    @Column()
    cpf: string;

    @Column()
    birthDate: Date;

    @Column()
    email: string;

    @Column()
    isAdmin: boolean;

    @CreateDateColumn()
    created_at?: Date;

    @OneToMany(() => Telefone, telefone => telefone.usuario, { eager: true })
    telefones: Telefone[];
    
    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.isAdmin = false;
            this.created_at = new Date();
        }
    }
}

export { Usuario };