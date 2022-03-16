import { ICreateTelefoneDTO } from "@modules/telefone/dtos/ICreateTelefoneDTO";
import { ITelefoneRepository } from "@modules/telefone/repositories/ITelefoneRepository";
import { getRepository, Repository } from "typeorm";
import { Telefone } from "../entities/Telefone";

class TelefoneRepository implements ITelefoneRepository {
    private repository: Repository<Telefone>;
    
    constructor() {
        this.repository = getRepository(Telefone);
    }
    async create({ number, customer, user }: ICreateTelefoneDTO): Promise<Telefone> {
        const telefone = this.repository.create({
            
        });

        await this.repository.save(telefone);

        return telefone;
    }

    findAll(): Promise<Telefone[]> {
        throw new Error("Method not implemented.");
    }

    findById(id: string): Promise<Telefone> {
        throw new Error("Method not implemented.");
    }

    findByUser(userId: string): Promise<Telefone[]> {
        throw new Error("Method not implemented.");
    }

    findByCustomer(customerId: string): Promise<Telefone[]> {
        throw new Error("Method not implemented.");
    }

    update(id: string, number: string): Promise<Telefone> {
        throw new Error("Method not implemented.");
    }

    delete(id: string): void {
        throw new Error("Method not implemented.");
    }

}

export { TelefoneRepository };