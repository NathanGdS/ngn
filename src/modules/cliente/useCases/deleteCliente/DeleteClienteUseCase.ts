import { IAutomovelRepository } from "@modules/automovel/repositories/IAutomovelRepository";
import { IClienteRepository } from "@modules/cliente/repositories/IClienteRepository";
import { ITelefoneRepository } from "@modules/telefone/repositories/ITelefoneRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteClienteUseCase {
    constructor(
        @inject("ClienteRepository")
        private clienteRepository: IClienteRepository,

        @inject("AutomovelRepository")
        private automovelRepository: IAutomovelRepository,

    ) { }
    
    async execute(id: string): Promise<void> {
        
        const customerHasAutomobiles = await this.automovelRepository.findByCustomer(id)
        if (customerHasAutomobiles.length > 0) throw new AppError('Cliente tem Automóvel(is) cadastrado(s)! Exclua-o(s) antes de excluir este registro!')
        this.clienteRepository.delete(id)
    }
}

export { DeleteClienteUseCase };