import { v4 as uuidV4 } from "uuid";

class Usuario {
    id: string;

    name: string;

    password: string;

    rg: string;

    cpf: string;

    birthDate: Date;

    email: string;

    isAdmin: boolean;

    created_at?: Date;
    
    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.isAdmin = false;
            this.created_at = new Date();
        }
    }
}

export { Usuario };