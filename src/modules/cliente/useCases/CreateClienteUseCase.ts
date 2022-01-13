import { IClienteRepository } from "../repositories/IClienteRepository";
import { Cliente } from "../infra/typeorm/entities/Cliente";
import { AppError } from "@shared/errors/AppError";
import { ICreateClienteDTO } from "../dtos/ICreateClienteDTO";

class CreateClienteUseCase {
    constructor(
        private clienteRepository: IClienteRepository
    ) {}
    
    async execute({name, password, rg, cpf, birthDate, email}: ICreateClienteDTO): Promise<Cliente> {
        const clienteExists = await this.clienteRepository.findByCpf(cpf);

        if (clienteExists) throw new AppError('Cliente already exists!');

        const cliente = await this.clienteRepository.create({ name, password, rg, cpf, birthDate, email });

        return cliente;
    }
}

export { CreateClienteUseCase };