import { Automovel } from "@modules/automovel/infra/typeorm/entities/Automovel";
import { Endereco } from "@modules/endereco/infra/typeorm/entities/Endereco";
import { Telefone } from "@modules/telefone/infra/typeorm/entities/Telefone";
import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";


@Entity("customers")
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

    @OneToMany(() => Telefone, telefone => telefone.customer, { eager: true })
    telefones: Telefone[];

    @OneToOne(() => Endereco, endereco => endereco.customer, { eager: true })
    endereco: Endereco;

    @OneToMany(() => Automovel, automovel => automovel.customer, { eager: true })
    automovel: Automovel[];
        
    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.created_at = new Date();
        }
    }
}

export { Cliente };