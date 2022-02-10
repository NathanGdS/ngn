import { ICreateUsuarioDTO } from "../dtos/ICreateUsuarioDTO";
import { Usuario } from "../infra/typeorm/entities/Usuario";

interface IUsuarioRepository {
    create(data: ICreateUsuarioDTO): Promise<Usuario>;
    findByName(name: string): Promise<Usuario>;
    findByCpf(cpf: string): Promise<Usuario>;
    findByRg(rg: string): Promise<Usuario>;
    findAll(): Promise<Usuario[]>;
    verifyIsAdmin(userId: string): Promise<Boolean>;
}

export { IUsuarioRepository };