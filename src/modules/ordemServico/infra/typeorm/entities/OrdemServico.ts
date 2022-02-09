import { Automovel } from "@modules/automovel/infra/typeorm/entities/Automovel";
import { Cliente } from "@modules/cliente/infra/typeorm/entities/Cliente";
import { Column, CreateDateColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid';
import { OrdemServicoPeca } from "./OrdemServicoPeca";
import { OrdemServicoProc } from "./OrdemServicoProc";
import { StatusOrdem } from "./StatusOrdem";

class OrdemServico {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    orderNum: number;

    @Column()
    orderDsc: string;
    
    @Column({type: "decimal", precision: 6, scale: 2 })
    orderTotal: number;

    @CreateDateColumn()
    created_at?: Date;
    
    @Column()
    finished_at?: Date;

    @ManyToOne(() => Cliente)
    customerId: string;

    @ManyToOne(() => Automovel)
    autoId: string;

    @OneToOne(() => StatusOrdem, status => status.orderStatusId)
    orderStatusId: string;

    @OneToMany(() => OrdemServicoPeca, peca => peca.orderId)
    pieceOrderId: OrdemServicoPeca[];

    @OneToMany(() => OrdemServicoProc, proc => proc.orderId)
    procOrderId: OrdemServicoProc[];

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.created_at = new Date();
        }
    }
}

export { OrdemServico };