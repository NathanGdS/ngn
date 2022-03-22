import { ICreateEnderecoDTO } from "@modules/endereco/dtos/ICreateEnderecoDTO";
import { IUpdateEnderecoDTO } from "@modules/endereco/dtos/IUpdateEnderecoDTO";
import { IEnderecoRepository } from "@modules/endereco/repositories/IEnderecoRepository";
import { getRepository, Repository } from "typeorm";
import { Endereco } from "../entities/Endereco";

class EnderecoRepository implements IEnderecoRepository {
    private repository: Repository<Endereco>;

    constructor() {
        this.repository = getRepository(Endereco);
    }

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
        const endereco = this.repository.create({
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

        await this.repository.save(endereco);

        return endereco;
    }

    async findAll(): Promise<Endereco[]> {
        return this.repository.find();
    }

    async findById(id: string): Promise<Endereco> {
        return this.repository.findOne({id});
    }
    
    async findByCustomer(customerId: string): Promise<Endereco> {
        return this.repository.findOne({ customerId });
    }

    async findByUser(userId: string): Promise<Endereco> {
        return this.repository.findOne({ userId });
    }

    async update({
        id,
        cep,
        street,
        number,
        supplement,
        district,
        town,
        uf
    }: IUpdateEnderecoDTO): Promise<Endereco> {
        await this.repository
            .createQueryBuilder()
            .update()
            .set({
                cep,
                street,
                number,
                supplement,
                district,
                town,
                uf
            })
            .where("id = :id")
            .setParameters({ id })
            .execute()
        
        return this.repository.findOne({ id });
    }

    delete(id: string): void {
        this.repository.delete({id});
    }

}

export { EnderecoRepository };