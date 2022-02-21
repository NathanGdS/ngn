import { ICreateClienteDTO } from "../dtos/ICreateClienteDTO";
import { IUpdateClienteDTO } from "../dtos/IUpdateClienteDTO";
import { Cliente } from "../infra/typeorm/entities/Cliente";

interface IClienteRepository {
    create(data: ICreateClienteDTO): Promise<Cliente>;
    findById(id: string): Promise<Cliente>;
    findByName(name: string): Promise<Cliente>;
    findByCpf(cpf: string): Promise<Cliente>;
    findByRg(rg: string): Promise<Cliente>;
    findByEmail(email: string): Promise<Cliente>;
    findAll(): Promise<Cliente[]>;
    update(data: IUpdateClienteDTO): Promise<Cliente>;
    delete(id: string): Promise<void>;
}

export { IClienteRepository };