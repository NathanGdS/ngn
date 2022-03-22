import { ICreateEnderecoDTO } from "@modules/endereco/dtos/ICreateEnderecoDTO";
import { IUpdateEnderecoDTO } from "@modules/endereco/dtos/IUpdateEnderecoDTO";
import { Endereco } from "../infra/typeorm/entities/Endereco";

interface IEnderecoRepository {
    create(data: ICreateEnderecoDTO): Promise<Endereco>;
    findAll(): Promise<Endereco[]>;
    findById(id: string): Promise<Endereco>;
    findByCustomer(customerId: string): Promise<Endereco>;
    findByUser(userId: string): Promise<Endereco>;
    update(data: IUpdateEnderecoDTO): Promise<Endereco>;
    delete(id: string): void;
}

export { IEnderecoRepository };