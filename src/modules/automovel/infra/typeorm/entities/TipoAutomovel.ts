import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Automovel } from "./Automovel";

@Entity()
class TipoAutomovel {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at?: Date;
    
    @OneToMany(() => Automovel, automovel => automovel.tipoAutomovel, { eager: true })
    automoveis: Automovel[];

    constructor () {
        if(!this.id) {
            this.id = uuidV4();
            this.created_at = new Date();
        }
    }
}

export { TipoAutomovel };
