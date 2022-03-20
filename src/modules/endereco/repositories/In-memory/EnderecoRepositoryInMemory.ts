import { ICreateEnderecoDTO } from "@modules/endereco/dtos/ICreateEnderecoDTO";
import { IUpdateEnderecoDTO } from "@modules/endereco/dtos/IUpdateEnderecoDTO";
import { Endereco } from "../../infra/typeorm/entities/Endereco";
import { IEnderecoRepository } from "../IEnderecoRepository";

class EnderecoRepositoryInMemory implements IEnderecoRepository {
    enderecos: Endereco[] = [];
    
    async create({
        cep,
        street,
        number,
        supplement,
        district,
        town,
        uf,
        customerId,
        userId
    }: ICreateEnderecoDTO): Promise<Endereco> {
        const endereco = new Endereco();

        Object.assign(endereco, {
            cep,
            street,
            number,
            supplement,
            district,
            town,
            uf,
            customerId,
            userId
        });

        this.enderecos.push(endereco)

        return endereco
    }

    async findAll(): Promise<Endereco[]> {
        return this.enderecos;
    }

    async findById(id: string): Promise<Endereco> {
        return this.enderecos.find(endereco => endereco.id === id)
    }

    async findByCustomer(customerId: string): Promise<Endereco> {
        return this.enderecos.find(endereco => endereco.customerId === customerId)
    }
    
    async findByUser(userId: string): Promise<Endereco> {
        return this.enderecos.find(endereco => endereco.userId === userId)
    }

    async update(data: IUpdateEnderecoDTO): Promise<Endereco> {
        const findIndex = this.enderecos.findIndex(endereco => endereco.id === data.id);
        this.enderecos[findIndex].cep = data.cep;
        this.enderecos[findIndex].street = data.street
        this.enderecos[findIndex].number = data.number
        this.enderecos[findIndex].supplement = data.supplement
        this.enderecos[findIndex].district = data.district
        this.enderecos[findIndex].town = data.town
        this.enderecos[findIndex].uf = data.uf

        return this.enderecos[findIndex];
    }
    
    delete(id: string): void {
        const findIndex = this.enderecos.findIndex(endereco => endereco.id === id)
        this.enderecos.splice(findIndex, 1)
    }
}

export { EnderecoRepositoryInMemory };