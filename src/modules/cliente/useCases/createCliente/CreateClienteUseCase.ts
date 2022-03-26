import { ICreateClienteDTO } from "@modules/cliente/dtos/ICreateClienteDTO";
import { Cliente } from "@modules/cliente/infra/typeorm/entities/Cliente";
import { IClienteRepository } from "@modules/cliente/repositories/IClienteRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateClienteUseCase {
    
    constructor(
        @inject("ClienteRepository")
        private clienteRepository: IClienteRepository
    ){}

    async execute({ name, email, cpf, rg, birthDate }: ICreateClienteDTO): Promise<Cliente> {
        const emailExists = await this.clienteRepository.findByEmail(email);
        const cpfExists = await this.clienteRepository.findByCPF(cpf);
        
        if (emailExists) throw new AppError('Email já cadastrado!');
        if (cpfExists) throw new AppError('CPF já cadastrado!');

        const cliente = await this.clienteRepository.create({ name, email, cpf, rg, birthDate });

        return cliente;
    }
}

export { CreateClienteUseCase };