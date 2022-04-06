import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity('ordem_procedimentos')
class OrdemProcedimentos {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    sequence: number;

    @Column()
    description: string;

    @Column()
    unit_value: number;

    @Column()
    amount: number;

    @Column()
    total_value: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAt?: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4()
            this.createdAt = new Date;
        }
    }
}

export { OrdemProcedimentos };

