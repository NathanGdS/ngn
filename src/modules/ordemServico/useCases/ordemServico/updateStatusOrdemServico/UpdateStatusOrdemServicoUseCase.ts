import { OrdemServico } from "@modules/ordemServico/infra/typeorm/entities/OrdemServico";
import { IOrdemServicoRepository } from "@modules/ordemServico/repositories/IOrdemServicoRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class UpdateStatusOrdemServicoUseCase {

    constructor(
        @inject("OrdemServicoRepository")
        private ordemServicoRepository: IOrdemServicoRepository
    ) { }

    async execute(id: string, statusId: string): Promise<OrdemServico> {
        return await this.ordemServicoRepository.updateStatus(id, statusId)
    }
}

export { UpdateStatusOrdemServicoUseCase };