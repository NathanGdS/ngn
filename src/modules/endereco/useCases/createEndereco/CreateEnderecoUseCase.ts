import { IUsuarioRepository } from "@modules/accounts/repositories/IUsuarioRepository";
import { IClienteRepository } from "@modules/cliente/repositories/IClienteRepository";
import { ICreateEnderecoDTO } from "@modules/endereco/dtos/ICreateEnderecoDTO";
import { Endereco } from "@modules/endereco/infra/typeorm/entities/Endereco";
import { IEnderecoRepository } from "@modules/endereco/repositories/IEnderecoRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateEnderecoUseCase {
    constructor(
        @inject("EnderecoRepository")
        private enderecoRepository: IEnderecoRepository,

        @inject("ClienteRepository")
        private clienteRepository: IClienteRepository,

        @inject("UsuarioRepository")
        private usuarioRepository: IUsuarioRepository

    ) { }
    
    async execute({
        cep,
        street,
        number,
        supplement,
        district,
        town,
        uf,
        customerId,
        userId }: ICreateEnderecoDTO): Promise<Endereco> {
        
        if (customerId) {
            const verifyCustomerId = await this.clienteRepository.findById(customerId)
            if(!verifyCustomerId) throw new AppError('Cliente não existe!')
            const enderecoExists = await this.enderecoRepository.findByCustomer(customerId)
            if (enderecoExists) {
                throw new AppError('Cliente pode ter apenas um endereço!')
            }
            const endereco = await this.enderecoRepository.create({
                cep,
                street,
                number,
                supplement,
                district,
                town,
                uf,
                customerId
            });

            return endereco
        }

        if (userId) {
            const verifyUserId = await this.usuarioRepository.findById(userId)
            if (!verifyUserId) throw new AppError('Usuário não existe!')
            const enderecoExists = await this.enderecoRepository.findByUser(userId)
            if (enderecoExists) {
                throw new AppError('Usuário pode ter apenas um endereço!')
            }
            const endereco = await this.enderecoRepository.create({
                cep,
                street,
                number,
                supplement,
                district,
                town,
                uf,
                userId
            });

            return endereco
        }
    }
}

export { CreateEnderecoUseCase };