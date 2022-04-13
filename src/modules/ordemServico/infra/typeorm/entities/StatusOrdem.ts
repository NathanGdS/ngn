import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { OrdemServico } from "./OrdemServico";

@Entity('ordem_status')
class StatusOrdem {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'status_numero' })
    statusNumber: number;

    @Column({ name: 'descricao' })
    description: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt?: Date;

    @OneToMany(() => OrdemServico, os => os.statusId)
    ordens: OrdemServico[];

    constructor() {
        if (!this.id) {
            this.id = uuidV4()
            this.createdAt = new Date;
        }
    }
}

export { StatusOrdem };

