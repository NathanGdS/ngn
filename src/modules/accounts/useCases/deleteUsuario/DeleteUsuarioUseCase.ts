import { IUsuarioRepository } from "@modules/accounts/repositories/IUsuarioRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteUsuarioUseCase {
    constructor(
        @inject("UsuarioRepository")
        private usuarioRepository: IUsuarioRepository
    ) { }
    
    async execute(id: string): Promise<void> {
        /** Aplicar validações após correção nas tabelas de telefone e endereço */
        this.usuarioRepository.delete(id);
    }
}

export { DeleteUsuarioUseCase }