import { Automovel } from '@modules/automovel/infra/typeorm/entities/Automovel';
import { Column, CreateDateColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

class Cliente {
    @PrimaryGeneratedColumn('uuid')
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

    @OneToMany(() => Automovel, automovel => automovel.clienteId)
    automoveis: Automovel[];
        
    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.created_at = new Date();
        }
    }
}

export { Cliente };