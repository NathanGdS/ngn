import { IUpdateClienteDTO } from "@modules/cliente/dtos/IUpdateClienteDTO";
import { Cliente } from "@modules/cliente/infra/typeorm/entities/Cliente";
import { IClienteRepository } from "@modules/cliente/repositories/IClienteRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class UpdateClienteUseCase {
    constructor(
        @inject("ClienteRepository")
        private clienteRepository: IClienteRepository
    ) { }
    
    async execute({ id, name, email, cpf, rg, birthDate }: IUpdateClienteDTO): Promise<Cliente> {
        const clienteExists = await this.clienteRepository.findById(id);

        if (!clienteExists) throw new AppError('Cliente não existe!');

        const emailExists = await this.clienteRepository.findByEmail(email);
        const cpfExists = await this.clienteRepository.findByCPF(cpf);

        if (emailExists && (email != clienteExists.email))
            throw new AppError('Já existe outro Cliente com este Email!')
        
        if (cpfExists && (cpf != clienteExists.cpf))
            throw new AppError('Já existe outro Cliente com este CPF!')
        
        const cliente = await this.clienteRepository.update({ id, name, email, cpf, rg, birthDate });

        return cliente;
    }
}

export { UpdateClienteUseCase };