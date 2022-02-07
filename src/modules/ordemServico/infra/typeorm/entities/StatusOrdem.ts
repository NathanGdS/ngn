import { Column, CreateDateColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { OrdemServico } from './OrdemServico';

class StatusOrdem {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    number: number;
    
    @Column()
    description: string;

    @CreateDateColumn()
    created_at?: Date;

    @OneToOne(() => OrdemServico)
    orderStatusId: string;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.created_at = new Date();
        }
    }
}

export { StatusOrdem } ;