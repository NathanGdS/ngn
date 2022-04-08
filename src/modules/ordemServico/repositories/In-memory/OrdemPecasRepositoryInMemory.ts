import { ICreateOrdemPecasDTO } from "@modules/ordemServico/dtos/ICreateOrdemPecasDTO";
import { OrdemPecas } from "@modules/ordemServico/infra/typeorm/entities/OrdemPecas";
import { IOrdemPecasRepository } from "../IOrdemPecasRepository";

class OrdemPecasRepositoryInMemory implements IOrdemPecasRepository {
    pecas: OrdemPecas[] = []

    async create({
        description,
        unit_value,
        amount
    }: ICreateOrdemPecasDTO): Promise<OrdemPecas> {
        const peca = new OrdemPecas();

        Object.assign(peca, {
            description,
            unit_value,
            amount,
            total_value: unit_value * amount
        })

        this.pecas.push(peca)

        return peca
    }

    async findAll(): Promise<OrdemPecas[]> {
        return this.pecas;
    }

    delete(id: string): void {
        const findIndex = this.pecas.findIndex(peca => peca.id === id)
        this.pecas.splice(findIndex, 1)
    }

}

export { OrdemPecasRepositoryInMemory };