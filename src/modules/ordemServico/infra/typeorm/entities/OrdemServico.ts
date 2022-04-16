import { Automovel } from "@modules/automovel/infra/typeorm/entities/Automovel";
import { Cliente } from "@modules/cliente/infra/typeorm/entities/Cliente";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { OrdemProcedimentos } from "./OrdemProcedimentos";
import { StatusOrdem } from "./StatusOrdem";

@Entity('ordem_servico')
export class OrdemServico {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    descricao: string;

    @Column()
    valorTotal: number;

    @Column()
    statusId: string;
    @ManyToOne(() => StatusOrdem, { eager: true })
    status: StatusOrdem;

    @Column()
    automovelId: string;
    @ManyToOne(() => Automovel, { eager: true })
    automovel: Automovel;

    @OneToMany(() => OrdemProcedimentos, op => op.ordemServico, { eager: true, cascade: true })
    procedimentos: OrdemProcedimentos[];

    @CreateDateColumn()
    created_at: Date;

    @Column({nullable: true})
    finished_at?: Date;

    constructor () {
        if(!this.id) {
            this.id = uuidV4();
            this.created_at = new Date();
        }
    }

}