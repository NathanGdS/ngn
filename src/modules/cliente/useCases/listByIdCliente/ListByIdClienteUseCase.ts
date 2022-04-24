import { Cliente } from "@modules/cliente/infra/typeorm/entities/Cliente";
import { IClienteRepository } from "@modules/cliente/repositories/IClienteRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class ListByIdClienteUseCase {
    constructor(
        @inject("ClienteRepository")
        private clienteRepository: IClienteRepository
    ) { }
    
    async execute(id: string): Promise<Cliente> {
        const cliente = await this.clienteRepository.findById(id)

        if (!cliente) throw new AppError('Cliente não encontrado!')

        return cliente
    }
}

export { ListByIdClienteUseCase };