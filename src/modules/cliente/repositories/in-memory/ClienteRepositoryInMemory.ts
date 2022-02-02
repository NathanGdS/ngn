import { ICreateClienteDTO } from "@modules/cliente/dtos/ICreateClienteDTO";
import { Cliente } from "@modules/cliente/infra/typeorm/entities/Cliente";
import { IClienteRepository } from "../IClienteRepository";

class ClienteRepositoryInMemory implements IClienteRepository {
    clientes: Cliente[] = [];

    async create({
        name,
        rg,
        cpf,
        birthDate,
        email
    }: ICreateClienteDTO): Promise<Cliente> {
        const cliente = new Cliente();

        Object.assign(cliente, {
            name,
            rg,
            cpf,
            birthDate,
            email
        });

        this.clientes.push(cliente);
        return cliente;
    }

    async findByName(name: string): Promise<Cliente> {
        return this.clientes.find((cliente) => cliente.name === name);
    }

    async findByCpf(cpf: string): Promise<Cliente> {
        return this.clientes.find((cliente) => cliente.cpf === cpf);
    }

    async findByRg(rg: string): Promise<Cliente> {
        return this.clientes.find((cliente) => cliente.rg === rg);
    }

    async findAll(): Promise<Cliente[]> {
        return this.clientes;
    }

    async findById(id: string): Promise<Cliente> {
        return this.clientes.find((cliente) => cliente.id === id);
    }
}

export { ClienteRepositoryInMemory };