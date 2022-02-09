import { Column, CreateDateColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { OrdemServico } from "./OrdemServico";
import { v4 as uuidV4 } from 'uuid';

class OrdemServicoProc {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    procSeq: number;

    @Column()
    procDescription: string;

    @Column({type: "float", precision: 6, scale: 2 })
    procUnitaryValue: number;

    @Column()
    procAmount: number; 
        
    @Column({ type: "float", precision: 6, scale: 2 })
    procTotalValue: number;

    @CreateDateColumn()
    created_at?: Date;

    @ManyToOne(() => OrdemServico)
    orderId: string;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.created_at = new Date();
        }
    }
}

export { OrdemServicoProc };