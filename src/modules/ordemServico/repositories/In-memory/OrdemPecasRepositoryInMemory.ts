import { ICreateOrdemPecasDTO } from "@modules/ordemServico/dtos/ICreateOrdemPecasDTO";
import { OrdemPecas } from "@modules/ordemServico/infra/typeorm/entities/OrdemPecas";
import { IOrdemPecasRepository } from "../IOrdemPecasRepository";

class OrdemPecasRepositoryInMemory implements IOrdemPecasRepository {
    pecas: OrdemPecas[] = []

    async create({
        sequence,
        description,
        unit_value,
        amount,
        total_value
    }: ICreateOrdemPecasDTO): Promise<OrdemPecas> {
        const peca = new OrdemPecas();

        Object.assign(peca, {
            sequence,
            description,
            unit_value,
            amount,
            total_value
        })

        this.pecas.push(peca)

        return peca
    }

    async findAll(): Promise<OrdemPecas[]> {
        return this.pecas;
    }

}

export { OrdemPecasRepositoryInMemory };