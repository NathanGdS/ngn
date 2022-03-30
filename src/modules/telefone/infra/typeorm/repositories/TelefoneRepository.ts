import { ICreateTelefoneDTO } from "@modules/telefone/dtos/ICreateTelefoneDTO";
import { ITelefoneRepository } from "@modules/telefone/repositories/ITelefoneRepository";
import { getRepository, Repository } from "typeorm";
import { Telefone } from "../entities/Telefone";

class TelefoneRepository implements ITelefoneRepository {
    private repository: Repository<Telefone>;
    
    constructor() {
        this.repository = getRepository(Telefone);
    }
    
    async create({ number, customerId, userId }: ICreateTelefoneDTO): Promise<Telefone> {
        const telefone = this.repository.create({
            number,
            customerId,
            userId
        });

        await this.repository.save(telefone);

        return telefone;
    }

    async findAll(): Promise<Telefone[]> {
        return this.repository.find();
    }

    async findById(id: string): Promise<Telefone> {
        return this.repository.findOne({ id });
    }

    async findByUser(userId: string): Promise<Telefone[]> {
        return this.repository.find({ userId });
    }

    async findByCustomer(customerId: string): Promise<Telefone[]> {
        return this.repository.find({ customerId });
    }

    async findByNumber(number: string): Promise<Telefone> {
        return this.repository.findOne({ number });
    }

    async update(id: string, number: string): Promise<Telefone> {
        await this.repository
            .createQueryBuilder()
            .update()
            .set({
                number
            })
            .where("id = :id")
            .setParameters({ id })
            .execute()
        
        return this.repository.findOne({ id });
    }

    delete(id: string): void {
        this.repository.delete({id})
    }
}

export { TelefoneRepository };