import { ICreateClienteDTO } from "../dtos/ICreateClienteDTO";
import { Cliente } from "../infra/typeorm/entities/Cliente";

interface IClienteRepository {
    create(data: ICreateClienteDTO): Promise<Cliente>;
    findByName(name: string): Promise<Cliente>;
    findByCpf(cpf: string): Promise<Cliente>;
}

export { IClienteRepository };