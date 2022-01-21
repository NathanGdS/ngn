import { ICreateClienteDTO } from "@modules/cliente/dtos/ICreateClienteDTO";
import { Cliente } from "@modules/cliente/infra/typeorm/entities/Cliente";
import { IClienteRepository } from "@modules/cliente/repositories/IClienteRepository";
import { AppError } from "@shared/errors/AppError";

class CreateClienteUseCase {
    constructor(
        private clienteRepository: IClienteRepository
    ) { }
    
    async execute({ name, rg, cpf, birthDate, email }: ICreateClienteDTO): Promise<Cliente> {

        const clienteExists = await this.clienteRepository.findByCpf(cpf);

        if (clienteExists) throw new AppError('Cliente already exists!');

        const cliente = await this.clienteRepository.create({ name, rg, cpf, birthDate, email });
        
        return cliente;
    }
}

export { CreateClienteUseCase };