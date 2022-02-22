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

    async execute({ id, name, rg, cpf, birthDate, email }): Promise<Cliente> {
        const clienteExists = await this.clienteRepository.findById(id);

        if (!clienteExists) throw new AppError('Cliente not exists!');

        const clienteRgExists = await this.clienteRepository.findByRg(rg);

        const clienteCpfExists = await this.clienteRepository.findByCpf(cpf);

        if (clienteRgExists && (rg != clienteExists.rg))
            throw new AppError('There is already another Cliente with this RG!');

        if (clienteCpfExists && (cpf != clienteExists.cpf))
            throw new AppError('There is already another Cliente with this CPF!');

        const cliente = await this.clienteRepository.update({ id, name, rg, cpf, birthDate, email });

        return cliente;

    }
    
}

export { UpdateClienteUseCase };