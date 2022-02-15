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
    ) { }
    
    async execute({ name, rg, cpf, birthDate, email }: ICreateClienteDTO): Promise<Cliente> {

        const clienteCPFExists = await this.clienteRepository.findByCpf(cpf);
        const clienteRGExists = await this.clienteRepository.findByRg(rg);

        if (clienteCPFExists || clienteRGExists) throw new AppError('Cliente already exists!');

        const cliente = await this.clienteRepository.create({ name, rg, cpf, birthDate, email });
        
        return cliente;
    }
}

export { CreateClienteUseCase };