import { IUpdateClienteDTO } from "@modules/cliente/dtos/IUpdateClienteDTO";
import { Cliente } from "@modules/cliente/infra/typeorm/entities/Cliente";
import { IClienteRepository } from "@modules/cliente/repositories/IClienteRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { validate } from "gerador-validador-cpf"
import validateRg from "@utils/validateRG"
import validator from "validator";

@injectable()
class UpdateClienteUseCase {
    constructor(
        @inject("ClienteRepository")
        private clienteRepository: IClienteRepository
    ) { }
    
    async execute({ id, name, email, cpf, rg, birthDate, telefoneCelular }: IUpdateClienteDTO): Promise<Cliente> {
        await this.validateFormats(email, cpf, rg);
        await this.verifyExistences(email, cpf, rg, id);
        
        const cliente = await this.clienteRepository.update({ id, name, email, cpf, rg, birthDate, telefoneCelular })

        return cliente;
    }

    private async verifyExistences(email:string, cpf:string, rg:string, id: string) {
        const clienteExists = await this.clienteRepository.findById(id)

        if (!clienteExists) throw new AppError('Cliente não existe!')
        const emailExists = await this.clienteRepository.findByEmail(email)
        if (emailExists && (email != clienteExists.email))
            throw new AppError('Já existe outro Cliente com este Email!')
        
        const cpfExists = await this.clienteRepository.findByCPF(cpf)
        if (cpfExists && (cpf != clienteExists.cpf))
            throw new AppError('Já existe outro Cliente com este CPF!')
        
        const rgExists = await this.clienteRepository.findByRG(rg)
        if (rgExists && (rg != clienteExists.rg))
            throw new AppError('Já existe outro Cliente com este RG!')
    }

    private async validateFormats(email:string, cpf:string, rg:string) {
        if(!validator.isEmail(email)) throw new AppError('Email inválido!')

        const validCPF = validate(cpf)
        if (!validCPF) throw new AppError('CPF inválido!')

        if(!validateRg(rg)) throw new AppError('RG inválido!')
    }

}

export { UpdateClienteUseCase };