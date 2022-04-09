import { ICreateOrdemPecasDTO } from "@modules/ordemServico/dtos/ICreateOrdemPecasDTO";
import { IUpdateOrdemPecaDTO } from "@modules/ordemServico/dtos/IUpdateOrdemPecaDTO";
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
            total_value: (unit_value * amount)
        })

        await this.repository.save(peca)

        return peca
    }

    async findAll(): Promise<OrdemPecas[]> {
        return this.repository.find()
    }

    async findById(id: string): Promise<OrdemPecas> {
        return this.repository.findOne({ id })
    }

    async update(id: string, { description, unit_value, amount }: IUpdateOrdemPecaDTO): Promise<OrdemPecas> {
        const values: IUpdateOrdemPecaDTO = {
            description,
            unit_value,
            amount,
            total_value: (unit_value * amount)
        }

        await this.repository
            .createQueryBuilder()
            .update()
            .set(
                values
            )
            .where("id = :id")
            .setParameters({ id })
            .execute()
        
        return this.findById(id)
    }

    delete(id: string): void {
        this.repository.delete({id})
    }
}

export { OrdemPecasRepository };