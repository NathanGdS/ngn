import { Cliente } from "@modules/cliente/infra/typeorm/entities/Cliente";
import { Usuario } from "@modules/usuario/infra/typeorm/entities/Usuario";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity()
class Telefone {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    telNumber: string;

    @CreateDateColumn()
    created_at?: Date;

    @ManyToOne(() => Cliente)
    customerId: string;

    @ManyToOne(() => Usuario)
    userId: string;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.created_at = new Date();
        }
    }
}

export { Telefone };