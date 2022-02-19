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
    
    async execute({id, name, rg, cpf, birthDate, email, isAdmin }: IUpdateUsuarioDTO): Promise<Usuario> {
        
        const usuarioExists = await this.usuarioRepository.findById(id);

        if (!usuarioExists) throw new AppError('Usuario not exists!');

        const usuarioCpfExists = await this.usuarioRepository.findByCpf(cpf);

        const usuarioRgExists = await this.usuarioRepository.findByRg(rg);

        if (usuarioCpfExists && (cpf != usuarioExists.cpf))
            throw new AppError('There is already another Usuario with this CPF!'); 
        
        if (usuarioRgExists && (rg != usuarioExists.rg))
            throw new AppError('There is already another Usuario with this RG!');
        
        const usuario = await this.usuarioRepository.update({ id, name, rg, cpf, birthDate, email, isAdmin });
        
        return usuario;
    }
}

export { UpdateUsuarioUseCase };