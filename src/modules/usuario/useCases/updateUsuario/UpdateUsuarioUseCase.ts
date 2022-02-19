import { IUpdateUsuarioDTO } from "@modules/usuario/dtos/IUpdateUsuarioDTO";
import { Usuario } from "@modules/usuario/infra/typeorm/entities/Usuario";
import { IUsuarioRepository } from "@modules/usuario/repositories/IUsuarioRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class UpdateUsuarioUseCase {
    constructor(
        @inject("UsuarioRepository")
        private usuarioRepository: IUsuarioRepository
    ) { }
    
    async execute({ name, rg, cpf, birthDate, email, isAdmin }: IUpdateUsuarioDTO): Promise<Usuario> {
        const usuarioExists = await this.usuarioRepository.findByCpf(cpf);

        if (!usuarioExists) throw new AppError('Usuario not exists!');

        const usuario = await this.usuarioRepository.update({ name, rg, cpf, birthDate, email, isAdmin });

        return usuario;
    }
}

export { UpdateUsuarioUseCase };