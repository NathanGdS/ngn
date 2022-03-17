import { Usuario } from "@modules/accounts/infra/typeorm/entities/Usuario";
import { Cliente } from "@modules/cliente/infra/typeorm/entities/Cliente";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity('telefones')
class Telefone {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'tel_number' })
    number: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @ManyToOne(() => Cliente, cliente => cliente.phones, { eager: true })
    customerId?: string;

    @ManyToOne(() => Usuario, usuario => usuario.phones, { eager: true })
    userId?: string;

    constructor() {
        if (!this.id) {
            this.id = uuidV4()
            this.createdAt = new Date();
        }
    }

}

export { Telefone };