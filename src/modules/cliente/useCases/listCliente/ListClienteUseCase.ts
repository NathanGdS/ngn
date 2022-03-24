import { Cliente } from "@modules/cliente/infra/typeorm/entities/Cliente";
import { IClienteRepository } from "@modules/cliente/repositories/IClienteRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class ListClienteUseCase {
    constructor(
        @inject("ClienteRepository")
        private clienteRepository: IClienteRepository
    ){}
    
    async execute(): Promise<Cliente[]> {
        const clientes = await this.clienteRepository.findAll();

        return clientes;
    }
}

export { ListClienteUseCase };