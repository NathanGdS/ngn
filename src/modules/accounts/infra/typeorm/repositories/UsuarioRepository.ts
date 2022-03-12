import { getRepository, Repository } from "typeorm";

import { ICreateUsuarioDTO } from "@modules/accounts/dtos/ICreateUsuarioDTO";
import { IUsuarioRepository } from "@modules/accounts/repositories/IUsuarioRepository";

import { Usuario } from "../entities/Usuario";

class UsuarioRepository implements IUsuarioRepository {
    private repository: Repository<Usuario>;

    constructor() {
        this.repository = getRepository(Usuario);
    }
    async create({
        cpf,
        email,
        name,
        password
    }: ICreateUsuarioDTO): Promise<Usuario> {
        const usuario = this.repository.create({
            cpf,
            email,
            name,
            password
        });

        await this.repository.save(usuario);

        return usuario;

    }
    async findAll(): Promise<Usuario[]> {
        return this.repository.find();
    }
    async findById(id: string): Promise<Usuario> {
        return this.repository.findOne(id);
    }

    async findByEmail(email: string): Promise<Usuario> {
        return this.repository.findOne({email});
    }

    async findByCPF(cpf: string): Promise<Usuario> {
        return this.repository.findOne({cpf});
    }
  
}

export { UsuarioRepository };