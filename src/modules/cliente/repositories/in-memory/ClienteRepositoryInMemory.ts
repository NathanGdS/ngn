import { ICreateClienteDTO } from "@modules/cliente/dtos/ICreateClienteDTO";
import { IUpdateClienteDTO } from "@modules/cliente/dtos/IUpdateClienteDTO";
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

    async findById(id: string): Promise<Cliente> {
        return this.clientes.find((cliente) => cliente.id === id);
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

    async findByEmail(email: string): Promise<Cliente> {
        return this.clientes.find((cliente) => cliente.email === email);
    }

    async findAll(): Promise<Cliente[]> {
        return this.clientes;
    }

    async update({id, name, cpf, rg, birthDate, email}: IUpdateClienteDTO): Promise<Cliente> {
        const cliente = this.clientes.find((cliente) => cliente.id === id);

        Object.assign(cliente, {
            name,
            cpf,
            rg,
            birthDate,
            email
        });

        this.clientes.push(cliente);

        return cliente;
    }

    async delete(id: string): Promise<void> {
        const clienteIndex = this.clientes.findIndex((cliente) => cliente.id === id);
        
        this.clientes.splice(clienteIndex, 1);
    }
}

export { ClienteRepositoryInMemory };