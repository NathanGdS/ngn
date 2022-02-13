import { Automovel } from "@modules/automovel/infra/typeorm/entities/Automovel";
import { Telefone } from "@modules/telefone/infra/typeorm/entities/Telefone";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";


@Entity("clientes")
class Cliente {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    cpf: string;

    @Column()
    rg: string;

    @Column()
    birthDate: Date;

    @Column()
    email: string;

    @CreateDateColumn()
    created_at?: Date;

    @OneToMany(() => Telefone, telefone => telefone.cliente, { eager: true })
    telefones: Telefone[];

    @OneToMany(() => Automovel, automovel => automovel.cliente, { eager: true })
    automovel: Automovel[];
        
    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.created_at = new Date();
        }
    }
}

export { Cliente };