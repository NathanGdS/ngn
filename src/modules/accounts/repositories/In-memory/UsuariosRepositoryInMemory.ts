import { Usuario } from "@modules/accounts/infra/typeorm/entities/Usuario";
import { ICreateUsuarioDTO } from "@modules/accounts/dtos/ICreateUsuarioDTO";
import { IUsuarioRepository } from "@modules/accounts/repositories/IUsuarioRepository";
import { IUpdateUsuarioDTO } from "@modules/accounts/dtos/IUpdateUsuarioDTO";


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

    async update(data: IUpdateUsuarioDTO): Promise<Usuario> {
        const findIndex = this.usuarios.findIndex(usuario => usuario.id === data.id);
        this.usuarios[findIndex].name = data.name;
        this.usuarios[findIndex].password = data.password;
        this.usuarios[findIndex].cpf = data.cpf;
        this.usuarios[findIndex].email = data.email;
        this.usuarios[findIndex].isAdmin = data.isAdmin;

        return this.usuarios[findIndex];
    }
    
    delete(id: string):void {
        const findIndex = this.usuarios.findIndex(usuario => usuario.id === id);
        this.usuarios.splice(findIndex, 1);
    }

}

export { UsuariosRepositoryInMemory };
