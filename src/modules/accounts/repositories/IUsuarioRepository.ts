import { Usuario } from "@modules/accounts/infra/typeorm/entities/Usuario";
import { ICreateUsuarioDTO } from "@modules/accounts/dtos/ICreateUsuarioDTO";

interface IUsuarioRepository {
    create(data: ICreateUsuarioDTO): Promise<Usuario>;
    findAll(): Promise<Usuario[]>;
    findById(id: string): Promise<Usuario>;
    findByEmail(email: string): Promise<Usuario>;
    findByCPF(cpf: string): Promise<Usuario>;
}

export { IUsuarioRepository };