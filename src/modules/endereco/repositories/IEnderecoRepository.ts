import { ICreateEnderecoDTO } from "../dtos/ICreateEnderecoDTO";
import { Endereco } from "../infra/typeorm/entities/Endereco";

interface IEnderecoRepository {
    create(data: ICreateEnderecoDTO): Promise<Endereco>;
    findByUser(userId: string): Promise<Endereco>;
    findByCustomer(customerId: string): Promise<Endereco>;
    findAll(): Promise<Endereco[]>;
}

export { IEnderecoRepository };