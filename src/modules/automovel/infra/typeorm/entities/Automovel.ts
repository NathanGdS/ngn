import { Cliente } from "@modules/cliente/infra/typeorm/entities/Cliente";
import { OrdemServico } from "@modules/ordemServico/infra/typeorm/entities/OrdemServico";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { TipoAutomovel } from "./TipoAutomovel";

@Entity("automoveis")
class Automovel {

    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column()
    plate: string;
    
    @Column()
    model: string;

    @Column()
    brand: string;

    @Column()
    color: string;

    @Column()
    year: number;

    @Column()
    renavam: number;

    @CreateDateColumn()
    created_at?: Date;

    @ManyToOne(() => TipoAutomovel, { eager: true })
    @JoinColumn({ name: "typeId" })
    tipoAutomovel: TipoAutomovel;

    @Column()
    typeId: string;

    @ManyToOne(() => Cliente, { eager: true })
    @JoinColumn({ name: "customerId" })
    cliente: Cliente;

    @Column()
    customerId: string;

    @OneToMany(() => OrdemServico, os => os.automovelId)
    ordens: OrdemServico[];
        
    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.created_at = new Date();
        }
    }
}

export { Automovel };