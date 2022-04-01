import { IUpdateUsuarioDTO } from "@modules/accounts/dtos/IUpdateUsuarioDTO";
import { Usuario } from "@modules/accounts/infra/typeorm/entities/Usuario";
import { IUsuarioRepository } from "@modules/accounts/repositories/IUsuarioRepository";
import { AppError } from "@shared/errors/AppError";
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
        const userExists = await this.usuarioRepository.findById(id)
        if (!userExists) throw new AppError('Usuário não existe!')

        const emailExists = await this.usuarioRepository.findByEmail(email)
        const cpfExists = await this.usuarioRepository.findByCPF(cpf)

        if (emailExists && (email != userExists.email)) 
            throw new AppError('Já existe outro Usuário com este Email!')
        
        if (cpfExists && (cpf != userExists.cpf))
            throw new AppError('Já existe outro Usuário com este CPF!')
        
        const usuario = await this.usuarioRepository.update({id, name, cpf, email, isAdmin})

        return usuario
    }
}

export { UpdateUsuarioUseCase };