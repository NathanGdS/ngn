import { Cliente } from "@modules/cliente/infra/typeorm/entities/Cliente";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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

    @ManyToOne(() => Cliente)
    customerId: Cliente;

    @ManyToOne(() => TipoAutomovel)
    autoTypeId: TipoAutomovel;
        
    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.created_at = new Date();
        }
    }
}

export { Automovel };