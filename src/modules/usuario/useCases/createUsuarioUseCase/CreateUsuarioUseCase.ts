import { IUsuarioRepository } from "../../repositories/IUsuarioRepository";
import { Usuario } from "../../infra/typeorm/entities/Usuario";
import { AppError } from "@shared/errors/AppError";
import { ICreateUsuarioDTO } from "../../dtos/ICreateUsuarioDTO";

class CreateUsuarioUseCase {
    constructor(
        private usuarioRepository: IUsuarioRepository
    ) {}
    
    async execute({name, password, rg, cpf, birthDate, email}: ICreateUsuarioDTO): Promise<Usuario> {
        const usuarioCpfExists = await this.usuarioRepository.findByCpf(cpf);
        const usuarioRgExists = await this.usuarioRepository.findByRg(rg);

        if (usuarioCpfExists || usuarioRgExists) throw new AppError('Usuário already exists!');

        const usuario = await this.usuarioRepository.create({ name, password, rg, cpf, birthDate, email });

        return usuario;
    }
}

export { CreateUsuarioUseCase };