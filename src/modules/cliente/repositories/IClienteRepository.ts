import { Cliente } from "../infra/typeorm/entities/Cliente";
import { ICreateClienteDTO } from "../dtos/ICreateClienteDTO";

interface IClienteRepository {
    create(data: ICreateClienteDTO): Promise<Cliente>;
    findAll(): Promise<Cliente[]>;
    findById(id: string): Promise<Cliente>;
    findByEmail(email: string): Promise<Cliente>;
    findByCPF(cpf: string): Promise<Cliente>;
}

export { IClienteRepository };