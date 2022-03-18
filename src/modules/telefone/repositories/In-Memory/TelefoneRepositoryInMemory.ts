import { ICreateTelefoneDTO } from "@modules/telefone/dtos/ICreateTelefoneDTO";
import { Telefone } from "@modules/telefone/infra/typeorm/entities/Telefone";
import { ITelefoneRepository } from "../ITelefoneRepository";

class TelefoneRepositoryInMemory implements ITelefoneRepository{
    telefones: Telefone[] = []

    async create({number, customerId, userId}: ICreateTelefoneDTO): Promise<Telefone> {
        const telefone = new Telefone();

        Object.assign(telefone, {
            number,
            customerId,
            userId
        });

        this.telefones.push(telefone);

        return telefone;
    }

    async findAll(): Promise<Telefone[]> {
        return this.telefones;
    }

    async findById(id: string): Promise<Telefone> {
        return this.telefones.find(telefone => telefone.id === id);
    }

    async findByUser(userId: string): Promise<Telefone[]> {
        return this.telefones.filter(telefone => telefone.userId === userId);
    }

    async findByCustomer(customerId: string): Promise<Telefone[]> {
        return this.telefones.filter(telefone => telefone.customerId === customerId);
    }

    async update(id: string, number: string): Promise<Telefone> {
        const findIndex = this.telefones.findIndex(telefone => telefone.id === id);
        this.telefones[findIndex].number == number;

        return this.telefones[findIndex];
    }

    delete(id: string): void {
        const findIndex = this.telefones.findIndex(telefone => telefone.id === id);
        this.telefones.splice(findIndex, 1);
    }
}

export { TelefoneRepositoryInMemory };