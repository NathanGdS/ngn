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
        /** SE TIVER CUSTOMER ID */
        if (customerId) {
            const verifyCustomerId = this.clienteRepository.findById(customerId)
            if (verifyCustomerId) {
                const telefoneExists = await this.telefoneRepository.findByCustomer(customerId)
                if (telefoneExists.find(customer => customer.number === number)) {
                    throw new AppError('Telefone já cadastrado!')
                }
                const telefone = await this.telefoneRepository.create({ number, customerId })

                return telefone
            }
        }
        /** SE TIVER USER ID */
        if (userId) {
            const verifyUserId = this.usuarioRepository.findById(userId)
            if (verifyUserId) {
                console.log("entrou acá");
                const telefoneExists = await this.telefoneRepository.findByUser(userId)
                if (telefoneExists.find(user => user.number === number)) {
                    console.log("entrou acá 2");
                    throw new AppError('Telefone já cadastrado!')
                }
                const telefone = await this.telefoneRepository.create({ number, userId })
                return telefone
            }
        }
    }
}

export { CreateTelefoneUseCase };