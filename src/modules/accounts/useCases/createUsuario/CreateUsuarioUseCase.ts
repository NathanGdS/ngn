import { ICreateUsuarioDTO } from "@modules/accounts/dtos/ICreateUsuarioDTO";
import { IUsuarioRepository } from "@modules/accounts/repositories/IUsuarioRepository";
import { Usuario } from "@modules/accounts/infra/typeorm/entities/Usuario";
import { inject, injectable } from "tsyringe";
import { hashSync } from "bcryptjs";
import { AppError } from "@shared/errors/AppError";
import { isValidCPF } from "@utils/isValidCPF";
import validate from "validator";

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
        if(!validate.isEmail(email)) throw new AppError('Email inválido!')

        const validCPF = await isValidCPF(cpf)
        if (validCPF == false) throw new AppError('CPF inválido!')

        const verifyEmail = await this.usuarioRepository.findByEmail(email)

        const verifyCPF = await this.usuarioRepository.findByCPF(cpf)
        
        if (verifyEmail || verifyCPF ) 
            throw new AppError('Já existe um usuário com este Email ou CPF!')

        const hash = hashSync(password, 8)
        const usuario = this.usuarioRepository.create({
            cpf,
            email,
            name,
            password: hash
        })

        return usuario

    }
}

export { CreateUsuarioUseCase };