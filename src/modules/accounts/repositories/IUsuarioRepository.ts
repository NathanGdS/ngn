import { Usuario } from "@modules/accounts/infra/typeorm/entities/Usuario";
import { ICreateUsuarioDTO } from "@modules/accounts/dtos/ICreateUsuarioDTO";
import { IUpdateUsuarioDTO } from "../dtos/IUpdateUsuarioDTO";

interface IUsuarioRepository {
    create(data: ICreateUsuarioDTO): Promise<Usuario>;
    findAll(): Promise<Usuario[]>;
    findById(id: string): Promise<Usuario>;
    findByEmail(email: string): Promise<Usuario>;
    findByCPF(cpf: string): Promise<Usuario>;
    update(data: IUpdateUsuarioDTO): Promise<Usuario>;
    delete(id: string): void;
    changePassword(id: string, newPassword: string): void;
}

export { IUsuarioRepository };