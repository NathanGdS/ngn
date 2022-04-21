import { OrdemServico } from "@modules/ordemServico/infra/typeorm/entities/OrdemServico";
import { IOrdemServicoRepository } from "@modules/ordemServico/repositories/IOrdemServicoRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class UpdateStatusOrdemServicoUseCase {

    constructor(
        @inject("OrdemServicoRepository")
        private ordemServicoRepository: IOrdemServicoRepository,
    ) { }

    async execute(id: string, statusId: string): Promise<OrdemServico> {
        const ordemServico = await this.ordemServicoRepository.findById(id)
        if (!ordemServico) throw new AppError('Ordem de serviço não encontrada!')
        if (ordemServico.statusId === statusId) throw new AppError('Ordem de serviço já está com este status!')
        
        return await this.ordemServicoRepository.updateStatus(id, statusId)
    }
}

export { UpdateStatusOrdemServicoUseCase };