import { Cliente } from "@modules/cliente/infra/typeorm/entities/Cliente";
import { Usuario } from "@modules/usuario/infra/typeorm/entities/Usuario";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("adresses")
class Endereco {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    addCep: string;
    
    @Column()
    addStreet: string;

    @Column()
    addNumber: number;

    @Column()
    addSupplement: string;

    @Column()
    addDistrict: string;

    @Column()
    addTown: string;

    @Column()
    addFU: string;

    @CreateDateColumn()
    created_at?: Date;

    @OneToOne(() => Usuario, { eager: true })
    @JoinColumn()
    user?: Usuario;

    @OneToOne(() => Cliente, { eager: true })
    @JoinColumn()
    customer?: Cliente;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.created_at = new Date();
        }
    }
}


export { Endereco };