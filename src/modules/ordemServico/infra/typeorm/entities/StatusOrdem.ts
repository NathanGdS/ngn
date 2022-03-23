import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity('ordem_status')
class StatusOrdem {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'status_number' })
    statusNumber: number;

    @Column({ name: 'description' })
    description: string;

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

