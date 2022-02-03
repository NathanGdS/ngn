import { ICreateEnderecoDTO } from "@modules/endereco/dtos/ICreateEnderecoDTO";
import { Endereco } from "@modules/endereco/infra/typeorm/entities/Endereco";
import { IEnderecoRepository } from "../IEnderecoRepository";

class EnderecoRepositoryInMemory implements IEnderecoRepository{
    enderecos: Endereco[] = [];

    async create({
        addCep,
        addStreet,
        addSupplement,
        addDistrict,
        addTown,
        addFU,
        userId,
        customerId
    }: ICreateEnderecoDTO): Promise<Endereco> {
        const endereco = new Endereco();
        
        Object.assign(endereco, {
            addCep,
            addStreet,
            addSupplement,
            addDistrict,
            addTown,
            addFU,
            userId,
            customerId
        });

        this.enderecos.push(endereco);

        return endereco;
    }
    
    async findByUser(userId: string): Promise<Endereco> {
        return this.enderecos.find((endereco) => endereco.userId === userId);
    }

    async findByCustomer(customerId: string): Promise<Endereco> {
        return this.enderecos.find((endereco) => endereco.customerId === customerId);
    }

    async findAll(): Promise<Endereco[]> {
        return this.enderecos;
    }
}

export { EnderecoRepositoryInMemory };