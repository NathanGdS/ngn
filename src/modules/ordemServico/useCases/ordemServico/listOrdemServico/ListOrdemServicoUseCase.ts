import { OrdemServico } from "@modules/ordemServico/infra/typeorm/entities/OrdemServico";
import { IOrdemServicoRepository } from "@modules/ordemServico/repositories/IOrdemServicoRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListOrdemServicoUseCase {
    constructor(
        @inject("OrdemServicoRepository")
        private ordemServicoRepository: IOrdemServicoRepository
    ) { }

    async execute(): Promise<OrdemServico[]> {
        return await this.ordemServicoRepository.findAll();
    }

}

export { ListOrdemServicoUseCase };