import { Usuario } from "@modules/accounts/infra/typeorm/entities/Usuario";
import { ICreateUsuarioDTO } from "@modules/accounts/dtos/ICreateUsuarioDTO";
import { IUsuarioRepository } from "@modules/accounts/repositories/IUsuarioRepository";


class UsuariosRepositoryInMemory implements IUsuarioRepository {
    usuarios: Usuario[] = [];

    async create({
        cpf,
        email,
        name,
        password
    }: ICreateUsuarioDTO): Promise<Usuario> {
        const usuario = new Usuario();

        Object.assign(usuario, {
            cpf,
            email,
            name,
            password
        });

        this.usuarios.push(usuario);

        return usuario;
    }

    async findById(id: string): Promise<Usuario> {
        return this.usuarios.find(usuario => usuario.id === id);
    }

    async findByEmail(email: string): Promise<Usuario> {
        return this.usuarios.find(usuario => usuario.email === email);
    }

    async findByCPF(cpf: string): Promise<Usuario> {
        return this.usuarios.find(usuario => usuario.cpf === cpf);
    }

    async findAll(): Promise<Usuario[]> {
       return this.usuarios;
    }

}

export { UsuariosRepositoryInMemory };
