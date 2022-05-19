import { ICreateClienteDTO } from "@modules/cliente/dtos/ICreateClienteDTO";
import { Cliente } from "@modules/cliente/infra/typeorm/entities/Cliente";
import { IClienteRepository } from "@modules/cliente/repositories/IClienteRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { validate } from "gerador-validador-cpf"
import validateRg from "@utils/validateRG"
import validator from "validator";

@injectable()
class CreateClienteUseCase {
    
    constructor(
        @inject("ClienteRepository")
        private clienteRepository: IClienteRepository
    ) { }
    
    async execute({ name, email, cpf, rg, birthDate, telefoneCelular }: ICreateClienteDTO): Promise<Cliente> {
        await this.validateFormats(email, rg, cpf)
        
        await this.validateExistences(email, cpf, rg)

        const cliente = await this.clienteRepository.create({ name, email, cpf, rg, birthDate, telefoneCelular })

        return cliente
    }

    private async validateFormats(email: string, rg: string, cpf: string) {
        if(!validator.isEmail(email)) throw new AppError('Email inválido!')
    
        if(!validateRg(rg)) throw new AppError('RG inválido!')

        const validCPF = validate(cpf)
        if (!validCPF) throw new AppError('CPF inválido!')
    }

    private async validateExistences(email: string, cpf: string, rg: string) {
        const emailExists = await this.clienteRepository.findByEmail(email)
        if (emailExists) throw new AppError('Email já cadastrado!')

        const cpfExists = await this.clienteRepository.findByCPF(cpf)
        if (cpfExists) throw new AppError('CPF já cadastrado!')

        const rgExists = await this.clienteRepository.findByRG(rg)
        if (rgExists) throw new AppError('RG já cadastrado!')
    }
}

export { CreateClienteUseCase };