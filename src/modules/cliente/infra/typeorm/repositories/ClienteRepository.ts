import { getRepository, Repository } from "typeorm";

import { ICreateClienteDTO } from "@modules/cliente/dtos/ICreateClienteDTO";
import { IClienteRepository } from "@modules/cliente/repositories/IClienteRepository";

import { Cliente } from "../entities/Cliente";
import { IUpdateClienteDTO } from "@modules/cliente/dtos/IUpdateClienteDTO";

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
        birthDate,
        telefoneCelular
    }: ICreateClienteDTO): Promise<Cliente> {
        const cliente = this.repository.create({
            name,
            email,
            cpf,
            rg,
            telefoneCelular,
            birthDate
        });

        await this.repository.save(cliente);

        return cliente;
    }

    async findById(id: string): Promise<Cliente> {
        return this.repository.findOne({ id });
    }

    async findByEmail(email: string): Promise<Cliente> {
        return this.repository.findOne({ email });
    }

    async findByCPF(cpf: string): Promise<Cliente> {
        return this.repository.findOne({ cpf });
    }

    async findByRG(rg: string): Promise<Cliente> {
        return this.repository.findOne({ rg });
    }

    async findAll(): Promise<Cliente[]> {
        return this.repository.find();
    }

    async update({id, name, email, cpf, rg, birthDate, telefoneCelular }: IUpdateClienteDTO): Promise<Cliente> {
        await this.repository
            .createQueryBuilder()
            .update()
            .set({
                name,
                email,
                cpf,
                rg,
                telefoneCelular,
                birthDate
            })
            .where("id = :id")
            .setParameters({ id })
            .execute()
        return this.repository.findOne({ id });
    }

    delete(id: string): void {
        this.repository.delete(id)
    }
}

export { ClienteRepository };