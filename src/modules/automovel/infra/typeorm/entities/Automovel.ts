import { Cliente } from "../../../../cliente/infra/typeorm/entities/Cliente";
import { OrdemServico } from "@modules/ordemServico/infra/typeorm/entities/OrdemServico";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { TipoAutomovel } from "./TipoAutomovel";

@Entity()
class Automovel {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    autoPlate: string;
    
    @Column()
    autoModel: string;

    @Column()
    autoBrand: string;

    @Column()
    autoColor: string;

    @Column()
    autoYear: number;

    @Column()
    autoRenavam: number;

    @CreateDateColumn()
    created_at?: Date;
        
    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.created_at = new Date();
        }
    }
}

export { Automovel };