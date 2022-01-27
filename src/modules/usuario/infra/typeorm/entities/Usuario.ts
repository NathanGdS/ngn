import { Endereco } from "@modules/endereco/infra/typeorm/entities/Endereco";
import { Telefone } from "@modules/telefone/infra/typeorm/entities/Telefone";
import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity()
class Usuario {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    rg: string;

    @Column()
    cpf: string;

    @Column()
    birthDate: Date;

    @Column()
    email: string;

    @Column()
    isAdmin: boolean;

    @CreateDateColumn()
    created_at?: Date;
    
    @OneToOne(() => Endereco, address => address.userId)
    addresses: Endereco;
    
    @OneToMany(() => Telefone, telephone => telephone.userId)
    telephones: Telefone[];    
    
    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.isAdmin = false;
            this.created_at = new Date();
        }
    }
}

export { Usuario };