import { Automovel } from "@modules/automovel/infra/typeorm/entities/Automovel";

import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("clientes")
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

    @Column()
    telefoneCelular: string;

    @Column({ name: 'birth_date' })
    birthDate: Date;

    @CreateDateColumn({ name: 'created_at' })
    createdAt?: Date;

    @OneToMany(() => Automovel, automovel => automovel.customerId)
    automobiles: Automovel[];

        
    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.createdAt = new Date();
        }
    }
}

export { Cliente }; 