import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid';

@Entity()
class Endereco {
    @PrimaryGeneratedColumn('uuid')
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

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.created_at = new Date();
        }
    }
}


export { Endereco };