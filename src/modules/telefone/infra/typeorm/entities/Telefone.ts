import { Cliente } from "@modules/cliente/infra/typeorm/entities/Cliente";
import { Usuario } from "@modules/usuario/infra/typeorm/entities/Usuario";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("telephones")
class Telefone {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    telNumber: string;

    @CreateDateColumn()
    created_at?: Date;

    @ManyToOne(() => Cliente, { eager: true })
    @JoinColumn()
    customer: Cliente;

    @ManyToOne(() => Usuario, { eager: true })
    @JoinColumn()
    user: Usuario;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.created_at = new Date();
        }
    }
}

export { Telefone };