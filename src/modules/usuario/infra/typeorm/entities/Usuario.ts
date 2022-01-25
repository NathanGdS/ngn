import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
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
    
    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.isAdmin = false;
            this.created_at = new Date();
        }
    }
}

export { Usuario };