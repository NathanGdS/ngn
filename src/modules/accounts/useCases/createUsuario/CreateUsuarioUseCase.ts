import { ICreateUsuarioDTO } from "@modules/accounts/dtos/ICreateUsuarioDTO";
import { IUsuarioRepository } from "@modules/accounts/repositories/IUsuarioRepository";
import { Usuario } from "@modules/accounts/infra/typeorm/entities/Usuario";
import { inject, injectable } from "tsyringe";
import { hashSync } from "bcryptjs";
import { AppError } from "@shared/errors/AppError";
import { validate } from "gerador-validador-cpf"
import validator from "validator";

@injectable()
class CreateUsuarioUseCase {
    constructor(
        @inject("UsuarioRepository")
        private usuarioRepository: IUsuarioRepository
    ) {}

    async execute({
        cpf,
        email,
        name,
        password
    }:ICreateUsuarioDTO): Promise<Usuario> {
        await this.verifyFormats(email, cpf)
        await this.verifyExistence(email, cpf)

        const hash = hashSync(password, 8)
        const usuario = this.usuarioRepository.create({
            cpf,
            email,
            name,
            password: hash
        })

        return usuario

    }

    private async verifyExistence(email:string, cpf: string) {
        const verifyEmail = await this.usuarioRepository.findByEmail(email)

        const verifyCPF = await this.usuarioRepository.findByCPF(cpf)
        
        if (verifyEmail || verifyCPF ) 
            throw new AppError('Já existe um usuário com este Email ou CPF!')
    }

    private async verifyFormats(email, cpf) {
        if(!validator.isEmail(email)) throw new AppError('Email inválido!')

        const validCPF = validate(cpf)
        if (!validCPF) throw new AppError('CPF inválido!')
    }
}

export { CreateUsuarioUseCase };