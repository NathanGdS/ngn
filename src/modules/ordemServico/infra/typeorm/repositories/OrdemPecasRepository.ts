import { ICreateOrdemPecasDTO } from "@modules/ordemServico/dtos/ICreateOrdemPecasDTO";
import { IOrdemPecasRepository } from "@modules/ordemServico/repositories/IOrdemPecasRepository";
import { getRepository, Repository } from "typeorm";
import { OrdemPecas } from "../entities/OrdemPecas";

class OrdemPecasRepository implements IOrdemPecasRepository {
    private repository: Repository<OrdemPecas>;

    constructor() {
        this.repository = getRepository(OrdemPecas)
    }

    async create({
        description,
        unit_value,
        amount
    }: ICreateOrdemPecasDTO): Promise<OrdemPecas> {
        const peca = this.repository.create({
            description,
            unit_value,
            amount,
            total_value: unit_value * amount
        })

        await this.repository.save(peca)

        return peca
    }

    async findAll(): Promise<OrdemPecas[]> {
        return this.repository.find()
    }

    delete(id: string): void {
        this.repository.delete({id});
    }
}

export { OrdemPecasRepository };