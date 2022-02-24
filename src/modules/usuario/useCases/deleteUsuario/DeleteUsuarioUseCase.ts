import { IUsuarioRepository } from "@modules/usuario/repositories/IUsuarioRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteUsuarioUseCase {
    constructor(
        @inject("UsuarioRepository")
        private usuarioRepository: IUsuarioRepository
    ) { }
    
    async execute(id: string): Promise<void> {
        this.usuarioRepository.delete(id);
    }
}

export { DeleteUsuarioUseCase };