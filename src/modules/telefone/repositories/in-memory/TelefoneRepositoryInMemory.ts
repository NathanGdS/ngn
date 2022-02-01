import { ICreateTelefoneDTO } from "@modules/telefone/dtos/ICreateTelefoneDTO";
import { Telefone } from "@modules/telefone/infra/typeorm/entities/Telefone";
import { ITelefoneRepository } from "../ITelefoneRepository";

class TelefoneRepositoryInMemory implements ITelefoneRepository {
    telefones: Telefone[] = [];

    async create({
        telNumber,
        customerId,
        userId
    }: ICreateTelefoneDTO): Promise<Telefone> {
        const telefone = new Telefone();

        Object.assign(telefone, {
            telNumber,
            customerId,
            userId
        });

        this.telefones.push(telefone);

        return telefone;
    }

    async findByTelNumber(telNumber: string): Promise<Telefone> {
        return this.telefones.find((telefone) => telefone.telNumber === telNumber);
    }

    async findByUser(userId: string): Promise<Telefone> {
        return this.telefones.find((telefone) => telefone.userId === userId);
    }

    async findByCustomer(customerId: string): Promise<Telefone> {
        return this.telefones.find((telefone) => telefone.customerId === customerId);
    }

    async findAll(): Promise<Telefone[]> {
        return this.telefones;
    }
}

export { TelefoneRepositoryInMemory };