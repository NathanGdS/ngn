import { Usuario } from "@modules/usuario/infra/typeorm/entities/Usuario";
import { IUsuarioRepository } from "@modules/usuario/repositories/IUsuarioRepository";
import { AppError } from "@shared/errors/AppError";

class ListUsuarioUseCase {
    constructor(
        private usuarioRepository: IUsuarioRepository
    ) { }
    
    async execute(): Promise<Usuario[]> {
        const usuarios = await this.usuarioRepository.findAll();

        if (!usuarios) throw new AppError('No Usuario found!');

        return usuarios;
    }
}

export { ListUsuarioUseCase };