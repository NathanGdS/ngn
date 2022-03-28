import { Usuario } from "@modules/accounts/infra/typeorm/entities/Usuario";
import { Cliente } from "@modules/cliente/infra/typeorm/entities/Cliente";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity('enderecos')
class Endereco {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'cep' })
    cep: string;

    @Column({ name: 'street' })
    street: string;

    @Column({ name: 'number' })
    number: number;

    @Column({ name: 'supplement' })
    supplement: string;

    @Column({ name: 'district' })
    district: string;

    @Column({ name: 'town' })
    town: string;

    @Column({ name: 'uf' })
    uf: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt?: Date;

    @OneToOne(() => Cliente, { eager: true })
    @JoinColumn({ name: "customerId" })
    cliente: Cliente
    
    @Column()
    customerId: string;

    @OneToOne(() => Usuario, { eager: true })
    @JoinColumn({ name: "userId" })
    usuario: Usuario

    @Column()
    userId: string;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.createdAt = new Date();
        }
    }
    
}

export { Endereco };