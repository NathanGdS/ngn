import { Column, CreateDateColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid';
import { OrdemServico } from "./OrdemServico";

class OrdemServicoPeca {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    pieceSeq: number;

    @Column()
    pieceDescription: string;

    @Column({type: "float", precision: 6, scale: 2 })
    pieceUnitaryValue: number;

    @Column()
    pieceAmount: number; 
        
    @Column({ type: "float", precision: 6, scale: 2 })
    pieceTotalValue: number;

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

export { OrdemServicoPeca };