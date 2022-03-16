import { Telefone } from "@modules/telefone/infra/typeorm/entities/Telefone";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity('clientes')
class Cliente {

    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    cpf: string;

    @Column()
    rg: string;

    @Column({ name: 'birth_date' })
    birthDate: Date;

    @CreateDateColumn({ name: 'created_at' })
    createdAt?: Date;

    @OneToMany(() => Telefone, telefone => telefone.customer)
    phones: Telefone[]
        
    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.createdAt = new Date();
        }
    }
}

export { Cliente }; 