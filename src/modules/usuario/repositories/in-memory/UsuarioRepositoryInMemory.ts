import { ICreateUsuarioDTO } from "@modules/usuario/dtos/ICreateUsuarioDTO";
import { Usuario } from "@modules/usuario/infra/typeorm/entities/Usuario";
import { IUsuarioRepository } from "../IUsuarioRepository";

class UsuarioRepositoryInMemory implements IUsuarioRepository{
    usuarios: Usuario[] = [];

    async create({
        name,
        password,
        rg,
        cpf,
        birthDate,
        email
    }: ICreateUsuarioDTO): Promise<Usuario> {
        const usuario = new Usuario();
        
        Object.assign(usuario, {
            name,
            password,
            rg,
            cpf,
            birthDate,
            email
        });

        this.usuarios.push(usuario);
        return usuario;
    }

    async findByName(name: string): Promise<Usuario> {
        return this.usuarios.find((usuario) => usuario.name === name);
    }

    async findByCpf(cpf: string): Promise<Usuario> {
        return this.usuarios.find((usuario) => usuario.cpf === cpf);
    }

    async findByRg(rg: string): Promise<Usuario> {
        return this.usuarios.find((usuario) => usuario.rg === rg);
    }

    async findAll(): Promise<Usuario[]> {
        return this.usuarios;
    }

    async verifyIsAdmin(userId: string): Promise<Boolean> {
        const usuario = this.usuarios.find((usuario) => usuario.id === userId);
        if (usuario.isAdmin == true) return true;
    }

    delete(id: string): void {
        this.usuarios = this.usuarios.filter(usuario => usuario.id != id);
    }
}

export { UsuarioRepositoryInMemory }; 