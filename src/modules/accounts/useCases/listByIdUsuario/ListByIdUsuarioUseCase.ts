import { Usuario } from "@modules/accounts/infra/typeorm/entities/Usuario";
import { IUsuarioRepository } from "@modules/accounts/repositories/IUsuarioRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class ListByIdUsuarioUseCase {
    constructor(
        @inject("UsuarioRepository")
        private usuarioRepository: IUsuarioRepository
    ) { }
    
    async execute(id: string): Promise<Usuario> {
        const usuario = await this.usuarioRepository.findById(id)

        if (!usuario) throw new AppError('Usuário não encontrado!')

        return usuario;
    }
}

export { ListByIdUsuarioUseCase };