import { ICreateOrdemProcedimentosDTO } from "@modules/ordemServico/dtos/ICreateOrdemProcedimentosDTO";
import { IUpdateOrdemProcedimentoDTO } from "@modules/ordemServico/dtos/IUpdateOrdemProcedimentoDTO";
import { IOrdemProcedimentosRepository } from "@modules/ordemServico/repositories/IOrdemProcedimentosRepository";
import { getRepository, Repository } from "typeorm";
import { OrdemProcedimentos } from "../entities/OrdemProcedimentos";

class OrdemProcedimentosRepository implements IOrdemProcedimentosRepository {
    private repository: Repository<OrdemProcedimentos>;

    constructor() {
        this.repository = getRepository(OrdemProcedimentos);
    }
    
    async create({
        description,
        unit_value,
        amount,
        ordemServicoId
    }: ICreateOrdemProcedimentosDTO): Promise<OrdemProcedimentos> {
        const ordemProcedimento = this.repository.create({
            description,
            unit_value,
            amount,
            ordemServicoId,
            total_value: (unit_value * amount)
        })

        await this.repository.save(ordemProcedimento)

        return ordemProcedimento
    }

    async findAll(): Promise<OrdemProcedimentos[]> {
        return this.repository.find()
    }

    async findById(id: string): Promise<OrdemProcedimentos> {
        return this.repository.findOne({id})
    }

    async findByOrdemServicoId(id: string): Promise<OrdemProcedimentos[]> {
        return this.repository.find({where: {ordemServicoId: id}})
    }

    async update(id:string, { amount, description, unit_value, ordemServicoId }: IUpdateOrdemProcedimentoDTO): Promise<OrdemProcedimentos> {
        const values: IUpdateOrdemProcedimentoDTO = {
            amount,
            description,
            unit_value,
            total_value: (unit_value * amount),
            ordemServicoId
        }

        await this.repository
            .createQueryBuilder()
            .update()
            .set(
                values
            )
            .where("id =:id")
            .setParameters({ id })
            .execute()

        return await this.findById(id)
    }

    delete(id: string): void {
        this.repository.delete({id})
    }

}

export { OrdemProcedimentosRepository };