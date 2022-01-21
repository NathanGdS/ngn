import { v4 as uuidV4 } from 'uuid';

class Cliente {
    id: string;

    name: string;

    cpf: string;

    rg: string;

    birthDate: Date;

    email: string;

    created_at?: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.created_at = new Date();
        }
    }
}

export { Cliente };