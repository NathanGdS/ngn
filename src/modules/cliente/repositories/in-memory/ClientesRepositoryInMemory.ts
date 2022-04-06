import { ICreateClienteDTO } from "@modules/cliente/dtos/ICreateClienteDTO";
import { IUpdateClienteDTO } from "@modules/cliente/dtos/IUpdateClienteDTO";
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

    async findByRG(rg: string): Promise<Cliente> {
        return this.clientes.find(cliente => cliente.rg === rg);
    }

    async findAll(): Promise<Cliente[]> {
        return this.clientes;
    }

    async update(data: IUpdateClienteDTO): Promise<Cliente> {
        const findIndex = this.clientes.findIndex(cliente => cliente.id === data.id);
        this.clientes[findIndex].name = data.name;
        this.clientes[findIndex].email = data.email;
        this.clientes[findIndex].cpf = data.cpf;
        this.clientes[findIndex].rg = data.rg;
        this.clientes[findIndex].birthDate = data.birthDate;

        return this.clientes[findIndex];
    }

    delete(id: string): void {
        const findIndex = this.clientes.findIndex(cliente => cliente.id === id);
        this.clientes.splice(findIndex, 1);
    }
}

export { ClientesRepositoryInMemory };