import { ICreateClienteDTO } from "@modules/cliente/dtos/ICreateClienteDTO";
import { Cliente } from "@modules/cliente/infra/typeorm/entities/Cliente";
import { IClienteRepository } from "../IClienteRepository";

class ClientesRepositoryInMemory implements IClienteRepository {
    clientes: Cliente[] = [];

    async create({
        name,
        email,
        rg,
        cpf,
        birthDate
    }: ICreateClienteDTO): Promise<Cliente> {
        const cliente = new Cliente();

        Object.assign(cliente, {
            name,
            email,
            rg,
            cpf,
            birthDate
        });

        this.clientes.push(cliente);

        return cliente;
    }

    async findById(id: string): Promise<Cliente> {
        return this.clientes.find(cliente => cliente.id === id);
    }

    async findByEmail(email: string): Promise<Cliente> {
        return this.clientes.find(cliente => cliente.email === email);
    }

    async findByCPF(cpf: string): Promise<Cliente> {
        return this.clientes.find(cliente => cliente.cpf === cpf);
    }

    async findAll(): Promise<Cliente[]> {
        return this.clientes;
    }
}