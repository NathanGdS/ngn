import { Cliente } from "@modules/cliente/infra/typeorm/entities/Cliente";
import { IClienteRepository } from "@modules/cliente/repositories/IClienteRepository";
import { AppError } from "@shared/errors/AppError";

class ListClienteUseCase {
    constructor(
        private clienteRepository: IClienteRepository
    ) { }
    
    async execute(): Promise<Cliente[]> {
        const clientes = await this.clienteRepository.findAll();

        if (!clientes) throw new AppError('No Cliente found!');

        return clientes;
    }
}

export { ListClienteUseCase };