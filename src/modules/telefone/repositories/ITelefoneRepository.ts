import { ICreateTelefoneDTO } from "../dtos/ICreateTelefoneDTO";
import { Telefone } from "../infra/typeorm/entities/Telefone";

interface ITelefoneRepository {
    create(data: ICreateTelefoneDTO): Promise<Telefone>;
    findByTelNumber(telNumber: string): Promise<Telefone>;
    findAll(): Promise<Telefone[]>;
}

export { ITelefoneRepository };