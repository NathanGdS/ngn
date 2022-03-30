import { ICreateTelefoneDTO } from "../dtos/ICreateTelefoneDTO";
import { Telefone } from "../infra/typeorm/entities/Telefone";

interface ITelefoneRepository {
    create(data: ICreateTelefoneDTO): Promise<Telefone>;
    findAll(): Promise<Telefone[]>;
    findById(id: string): Promise<Telefone>;
    findByUser(userId: string): Promise<Telefone[]>;
    findByCustomer(customerId: string): Promise<Telefone[]>;
    findByNumber(number: string): Promise<Telefone>;
    update(id: string, number: string): Promise<Telefone>;
    delete(id: string): void;
}

export { ITelefoneRepository };