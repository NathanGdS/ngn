import { ICreateTelefoneDTO } from "../dtos/ICreateTelefoneDTO";
import { Telefone } from "../infra/typeorm/entities/Telefone";

interface ITelefoneRepository {
    create(data: ICreateTelefoneDTO): Promise<Telefone>;
    findByUser(userId: string): Promise<Telefone>;
    findByTelNumber(telNumber: string): Promise<Telefone>;
    findByCustomer(customerId: string): Promise<Telefone>;
    findAll(): Promise<Telefone[]>;
}

export { ITelefoneRepository };