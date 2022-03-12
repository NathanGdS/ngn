import { getRepository, Repository } from "typeorm";

import { ICreateClienteDTO } from "@modules/cliente/dtos/ICreateClienteDTO";
import { IClienteRepository } from "@modules/cliente/repositories/IClienteRepository";

import { Cliente } from "../entities/Cliente";

class ClienteRepository implements IClienteRepository {
    private repository: Repository<Cliente>;

    constructor() {
        this.repository = getRepository(Cliente);
    }

    async create({
        name,
        email,
        cpf,
        rg,
        birthDate
    }: ICreateClienteDTO): Promise<Cliente> {
        const cliente = this.repository.create({
            name,
            email,
            cpf,
            rg,
            birthDate
        });

        await this.repository.save(cliente);

        return cliente;
    }

    async findById(id: string): Promise<Cliente> {
        return this.repository.findOne(id);
    }

    async findByEmail(email: string): Promise<Cliente> {
        return this.repository.findOne({ email });
    }

    async findByCPF(cpf: string): Promise<Cliente> {
        return this.repository.findOne({ cpf });
    }

    async findAll(): Promise<Cliente[]> {
        return this.repository.find();
    }
}

export { ClienteRepository };