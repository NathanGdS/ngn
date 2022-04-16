import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { OrdemServico } from "./OrdemServico";

@Entity('ordem_pecas')
class OrdemPecas {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: "descricao" })
    description: string;

    @Column({ name: "valor_unitario" })
    unit_value: number;

    @Column({ name: "quantidade" })
    amount: number;

    @Column({ name: "valor_total" })
    total_value: number;

    @Column()
    ordemServicoId: string;
    @ManyToOne(() => OrdemServico, os => os.id, { eager: false })
    ordemServico: OrdemServico

    @CreateDateColumn({ name: 'created_at' })
    createdAt?: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.createdAt = new Date();
        }
    }
}

export { OrdemPecas };