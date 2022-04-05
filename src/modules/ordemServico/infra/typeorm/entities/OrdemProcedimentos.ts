import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity('ordem_procedimentos')
class StatusOrdem {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    sequencia: number;

    @Column()
    descricao: string;

    @Column()
    valor_unitario: number;

    @Column()
    quantidade: number;

    @Column()
    valor_total: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAt?: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4()
            this.createdAt = new Date;
        }
    }
}

export { StatusOrdem };

