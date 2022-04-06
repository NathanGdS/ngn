import { Cliente } from "../infra/typeorm/entities/Cliente";
import { ICreateClienteDTO } from "../dtos/ICreateClienteDTO";
import { IUpdateClienteDTO } from "../dtos/IUpdateClienteDTO";

interface IClienteRepository {
    create(data: ICreateClienteDTO): Promise<Cliente>;
    findAll(): Promise<Cliente[]>;
    findById(id: string): Promise<Cliente>;
    findByEmail(email: string): Promise<Cliente>;
    findByCPF(cpf: string): Promise<Cliente>;
    findByRG(rg: string): Promise<Cliente>;
    update(data: IUpdateClienteDTO): Promise<Cliente>;
    delete(id: string): void;
}

export { IClienteRepository };