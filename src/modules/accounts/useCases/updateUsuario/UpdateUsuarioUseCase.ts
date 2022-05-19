import { IUpdateUsuarioDTO } from "@modules/accounts/dtos/IUpdateUsuarioDTO";
import { Usuario } from "@modules/accounts/infra/typeorm/entities/Usuario";
import { IUsuarioRepository } from "@modules/accounts/repositories/IUsuarioRepository";
import { AppError } from "@shared/errors/AppError";
import { validate } from "gerador-validador-cpf"
import validator from "validator";
import { inject, injectable } from "tsyringe";

@injectable()
class UpdateUsuarioUseCase {
    constructor(
        @inject("UsuarioRepository")
        private usuarioRepository: IUsuarioRepository
    ) { }
    
    async execute({
        id,
        name,
        cpf,
        email,
        isAdmin
    }: IUpdateUsuarioDTO): Promise<Usuario> {
        await this.verifyFormats(email, cpf)
        await this.verifyExistence(id, email, cpf);

        const usuario = await this.usuarioRepository.update({id, name, cpf, email, isAdmin})

        return usuario
    }

    private async verifyFormats(email:string, cpf: string): Promise<void> {
        if(!validator.isEmail(email)) throw new AppError('Email inválido!')

        const validCPF = validate(cpf)
        if (!validCPF) throw new AppError('CPF inválido!')
    }

    private async verifyExistence(id: string, email: string, cpf: string) {
        const userExists = await this.usuarioRepository.findById(id)
        if (!userExists) throw new AppError('Usuário não existe!')

        const emailExists = await this.usuarioRepository.findByEmail(email)
        const cpfExists = await this.usuarioRepository.findByCPF(cpf)

        if (emailExists && (email != userExists.email)) 
            throw new AppError('Já existe outro Usuário com este Email!')
        
        if (cpfExists && (cpf != userExists.cpf))
            throw new AppError('Já existe outro Usuário com este CPF!')
    }
}

export { UpdateUsuarioUseCase };