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
        let endereco: Endereco;
        
        const clienteExists = await this.clienteRepository.findById(customerId);
        const usuarioExists = await this.usuarioRepository.findById(userId);

        if (clienteExists) {
            const enderecoExists = await this.enderecoRepository.findByCustomer(customerId);
            if (enderecoExists) {
                throw new AppError('Cliente pode ter apenas um endereço!');
            }
            endereco = await this.enderecoRepository.create({
                cep,
                street,
                number,
                supplement,
                district,
                town,
                uf,
                customerId
            });
        }

        if (usuarioExists) {
            const enderecoExists = await this.enderecoRepository.findByUser(userId);
            if (enderecoExists) {
                throw new AppError('Usuário pode ter apenas um endereço!');
            }
            endereco = await this.enderecoRepository.create({
                cep,
                street,
                number,
                supplement,
                district,
                town,
                uf,
                userId
            });
        }

        return endereco;
    }
}

export { CreateEnderecoUseCase };