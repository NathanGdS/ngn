import { inject, injectable } from "tsyringe";
import { IOrdemServicoRepository } from "@modules/ordemServico/repositories/IOrdemServicoRepository";
import { AppError } from "@shared/errors/AppError";
import { IOrdemPecasRepository } from "@modules/ordemServico/repositories/IOrdemPecasRepository";
import { IOrdemProcedimentosRepository } from "@modules/ordemServico/repositories/IOrdemProcedimentosRepository";
import { IStatusOrdemRepository } from "@modules/ordemServico/repositories/IStatusOrdemRepository";


@injectable()
class DeleteOrdemServicoUseCase {

    constructor (
        @inject("OrdemServicoRepository")
        private readonly ordemServicoRepository: IOrdemServicoRepository,
        @inject("OrdemPecasRepository")
        private readonly ordemPecasRepository: IOrdemPecasRepository,
        @inject("OrdemProcedimentosRepository")
        private readonly ordemProcedimentosRepository: IOrdemProcedimentosRepository,
        @inject("StatusOrdemRepository")
        private readonly statusOrdemRepository: IStatusOrdemRepository
    ) { }

    async execute(id: string): Promise<void> {
        const found = await this.ordemServicoRepository.findById(id)
        if (!found) throw new AppError('Ordem não encontrada!', 404)

        const verifyOrdemStatus = await this.statusOrdemRepository.findById(found.statusId)

        if (verifyOrdemStatus.statusNumber !== (1 || 7)) throw new AppError('Ordem não pode ser deletada!', 400)
        
        const ordemPecas = await this.ordemPecasRepository.findByOrdemServicoId(id)
        if (ordemPecas.length > 0) throw new AppError('Ordem não pode ser excluída pois possui peças relacionadas!', 400)

        const ordemProcedimentos = await this.ordemProcedimentosRepository.findByOrdemServicoId(id)
        if (ordemProcedimentos.length > 0) throw new AppError('Ordem não pode ser excluída pois possui procedimentos relacionados!', 400)

        this.ordemServicoRepository.delete(id)
    }
}

export { DeleteOrdemServicoUseCase }; 