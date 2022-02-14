import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { OrdemServico } from "./OrdemServico";

@Entity("order_status")
class StatusOrdem {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    statusNumber: number;
    
    @Column()
    description: string;

    @CreateDateColumn()
    created_at?: Date;

    @OneToOne(() => OrdemServico)
    orderStatusId: string;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.created_at = new Date();
        }
    }
}

export { StatusOrdem } ;