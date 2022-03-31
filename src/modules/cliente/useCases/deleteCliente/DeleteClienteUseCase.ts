import { IAutomovelRepository } from "@modules/automovel/repositories/IAutomovelRepository";
import { IClienteRepository } from "@modules/cliente/repositories/IClienteRepository";
import { IEnderecoRepository } from "@modules/endereco/repositories/IEnderecoRepository";
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

        @inject("TelefoneRepository")
        private telefoneRepository: ITelefoneRepository,

        @inject("EnderecoRepository")
        private enderecoRepository: IEnderecoRepository
    ) { }
    
    async execute(id: string): Promise<void> {
        
        const customerHasAutomobiles = await this.automovelRepository.findByCustomer(id)
        if (customerHasAutomobiles.length > 0) throw new AppError('Cliente tem Automóvel(is) cadastrado(s)! Exclua-o(s) antes de excluir este registro!')

        const customerHasPhones = await this.telefoneRepository.findByCustomer(id)
        if (customerHasPhones.length > 0) throw new AppError('Cliente tem telefone(s) cadastrado(s)! Exclua-o(s) antes de excluir este registro!')
        
        const customerHasAddresses = await this.enderecoRepository.findByCustomer(id)
        if (customerHasAddresses) throw new AppError('Cliente tem endereço(s) cadastrado(s)! Exclua-o(s) antes de excluir este registro!')

        this.clienteRepository.delete(id)
    }
}

export { DeleteClienteUseCase };