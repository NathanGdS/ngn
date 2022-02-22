import { IUsuarioRepository } from "@modules/usuario/repositories/IUsuarioRepository";
import { AppError } from "@shared/errors/AppError";
import { inject } from "tsyringe";

class DeleteUsuarioUseCase {
    constructor(
        @inject("UsuarioRepository")
        private usuarioRepository: IUsuarioRepository
    ) { }
    
    async execute(id: string): Promise<void> {
        const usuarioExists = await this.usuarioRepository.findById(id);

        if (!usuarioExists) throw new AppError('Usuario not exists!');

        await this.usuarioRepository.delete(id);
    }
}

export { DeleteUsuarioUseCase };