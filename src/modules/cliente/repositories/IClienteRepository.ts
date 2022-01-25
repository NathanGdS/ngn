import { ICreateClienteDTO } from "../dtos/ICreateClienteDTO";
import { Cliente } from "../infra/typeorm/entities/Cliente";

interface IClienteRepository {
    create(data: ICreateClienteDTO): Promise<Cliente>;
    findByName(name: string): Promise<Cliente>;
    findByCpf(cpf: string): Promise<Cliente>;
    findByRg(rg: string): Promise<Cliente>;
    findAll(): Promise<Cliente[]>;
}

export { IClienteRepository };