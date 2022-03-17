import { IUsuarioRepository } from "@modules/accounts/repositories/IUsuarioRepository";
import { Usuario } from "@modules/accounts/infra/typeorm/entities/Usuario";
import { inject, injectable } from "tsyringe";

@injectable()
class ListUsuariosUseCase {
    constructor(
        @inject("UsuarioRepository")
        private usuarioRepository: IUsuarioRepository
    ) {}

    async execute(): Promise<Usuario[]> {

        const usuarios = this.usuarioRepository.findAll();

        return usuarios;
    }
}

export { ListUsuariosUseCase };