import { ICreateOrdemProcedimentosDTO } from "@modules/ordemServico/dtos/ICreateOrdemProcedimentosDTO";
import { IOrdemProcedimentosRepository } from "@modules/ordemServico/repositories/IOrdemProcedimentosRepository";
import { getRepository, Repository } from "typeorm";
import { OrdemProcedimentos } from "../entities/OrdemProcedimentos";

class OrdemProcedimentosRepository implements IOrdemProcedimentosRepository {
    private repository: Repository<OrdemProcedimentos>;

    constructor() {
        this.repository = getRepository(OrdemProcedimentos);
    }
    
    async create({
        descricao,
        quantidade,
        sequencia,
        valor_total,
        valor_unitario
    }: ICreateOrdemProcedimentosDTO): Promise<OrdemProcedimentos> {
        const ordemProcedimento = this.repository.create({
            descricao,
            quantidade,
            sequencia,
            valor_total,
            valor_unitario
        });

        await this.repository.save(ordemProcedimento);

        return ordemProcedimento;
    }

    async findAll(): Promise<OrdemProcedimentos[]> {
        return this.repository.find();
    }

}

export { OrdemProcedimentosRepository };