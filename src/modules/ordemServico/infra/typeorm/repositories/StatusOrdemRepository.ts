import { IStatusOrdemRepository } from "@modules/ordemServico/repositories/IStatusOrdemRepository";
import { getRepository, Repository } from "typeorm";
import { StatusOrdem } from "../entities/StatusOrdem";

class StatusOrdemRepository implements IStatusOrdemRepository {
    private repository: Repository<StatusOrdem>;

    constructor() {
        this.repository = getRepository(StatusOrdem);
    }
    
    async findAll(): Promise<StatusOrdem[]> {
        return this.repository.find();
    }

    async findByNumber(number: number): Promise<StatusOrdem> {
        return this.repository.findOne({
            where: { statusNumber: number }
        });
    }

    async findById(id: string): Promise<StatusOrdem> {
        return this.repository.findOne({ id });
    }

    async findByDescription(description: string): Promise<StatusOrdem> {
        return this.repository.findOne({ description });
    }

    async create(description: string): Promise<StatusOrdem> {
        const osStatus =  this.repository.create({
            description
        })

        await this.repository.save(osStatus)
        return osStatus
    }

}

export { StatusOrdemRepository };