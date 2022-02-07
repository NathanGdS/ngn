import { Automovel } from '@modules/automovel/infra/typeorm/entities/Automovel';
import { Endereco } from '@modules/endereco/infra/typeorm/entities/Endereco';
import { OrdemServico } from '@modules/ordemServico/infra/typeorm/entities/OrdemServico';
import { Telefone } from '@modules/telefone/infra/typeorm/entities/Telefone';
import { Column, CreateDateColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
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

    @OneToMany(() => Automovel, vehicle => vehicle.customerId)
    vehicles: Automovel[];

    @OneToOne(() => Endereco, address => address.customerId)
    addresses: Endereco;

    @OneToMany(() => Telefone, telephone => telephone.customerId)
    telephones: Telefone[];
    
    @OneToMany(() => OrdemServico, order => order.customer_id)
    orders: OrdemServico[];
        
    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.created_at = new Date();
        }
    }
}

export { Cliente };