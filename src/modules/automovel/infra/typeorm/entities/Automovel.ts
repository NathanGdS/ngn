import { Cliente } from "../../../../cliente/infra/typeorm/entities/Cliente";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { TipoAutomovel } from "./TipoAutomovel";

@Entity("automobiles")
class Automovel {

    @PrimaryGeneratedColumn("uuid")
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

    @ManyToOne(() => TipoAutomovel, { eager: true })
    @JoinColumn()
    automobileType: TipoAutomovel;

    @ManyToOne(() => Cliente, { eager: true })
    @JoinColumn()
    customer: Cliente;
        
    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.created_at = new Date();
        }
    }
}

export { Automovel };