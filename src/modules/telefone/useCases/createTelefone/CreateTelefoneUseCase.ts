import { IUsuarioRepository } from "@modules/accounts/repositories/IUsuarioRepository";
import { IClienteRepository } from "@modules/cliente/repositories/IClienteRepository";
import { ICreateTelefoneDTO } from "@modules/telefone/dtos/ICreateTelefoneDTO";
import { Telefone } from "@modules/telefone/infra/typeorm/entities/Telefone";
import { ITelefoneRepository } from "@modules/telefone/repositories/ITelefoneRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateTelefoneUseCase {
    constructor(
        @inject("TelefoneRepository")
        private telefoneRepository: ITelefoneRepository,
        @inject("UsuarioRepository")
        private usuarioRepository: IUsuarioRepository,
        @inject("ClienteRepository")
        private clienteRepository: IClienteRepository
    ) { }

    async execute({ number, customerId, userId }: ICreateTelefoneDTO): Promise<Telefone> {
        const verifyCustomerId = this.clienteRepository.findById(customerId);
        const verifyUserId = this.usuarioRepository.findById(userId);
        let telefone: Telefone;

        if (verifyCustomerId) {
            const telefoneExists = await this.telefoneRepository.findByCustomer(customerId)
            if (telefoneExists.find(customer => customer.number === number)) {
                throw new AppError('Telefone já existe!')
            }
            telefone = await this.telefoneRepository.create({ number, customerId });
            
        } else {
            throw new AppError('Cliente não existe!')
        }

        if (verifyUserId) {
            const telefoneExists = await this.telefoneRepository.findByUser(userId)
            if (telefoneExists.find(user => user.number === number)) {
                throw new AppError('Telefone já existe!')
            }
            telefone = await this.telefoneRepository.create({ number, userId });
        } else {
            throw new AppError('Usuário não existe!')
        }

        return telefone;
    }
}

export { CreateTelefoneUseCase };