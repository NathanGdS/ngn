import { Usuario } from "@modules/accounts/infra/typeorm/entities/Usuario";
import { Cliente } from "@modules/cliente/infra/typeorm/entities/Cliente";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity('telefones')
class Telefone {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'number' })
    number: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @ManyToOne(() => Cliente, { eager: true })
    @JoinColumn({ name: "customerId" })
    customer: Cliente;

    @Column()
    customerId: string;

    @ManyToOne(() => Usuario, { eager: true })
    @JoinColumn({ name: "userId" })
    user: Usuario;

    @Column()
    userId: string;

    constructor() {
        if (!this.id) {
            this.id = uuidV4()
            this.createdAt = new Date();
        }
    }

}

export { Telefone };