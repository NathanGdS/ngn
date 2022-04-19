import { IOrdemProcedimentosRepository } from "@modules/ordemServico/repositories/IOrdemProcedimentosRepository";
import { IOrdemServicoRepository } from "@modules/ordemServico/repositories/IOrdemServicoRepository";
import { IStatusOrdemRepository } from "@modules/ordemServico/repositories/IStatusOrdemRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";


@injectable()
class DeleteOrdemProcedimentoUseCase {

    constructor(
        @inject("OrdemProcedimentosRepository")
        private ordemProcedimentosRepository: IOrdemProcedimentosRepository,
        @inject("OrdemServicoRepository")
        private ordemServicoRepository: IOrdemServicoRepository,
        @inject("StatusOrdemRepository")
        private statusOrdemRepository: IStatusOrdemRepository
    ) { }
    
    async execute(id: string): Promise<void> {
        const found = await this.ordemProcedimentosRepository.findById(id)
        if (!found) throw new AppError('Ordem informada não encontrada!')
        
        const ordemServico = await this.ordemServicoRepository.findById(found.ordemServicoId)
        const ordemStatus = await this.statusOrdemRepository.findById(ordemServico.statusId)

        if (ordemStatus.statusNumber !== (1 || 6 || 7)) throw new AppError('Procedimento não pode ser deletado!', 400)

        this.ordemProcedimentosRepository.delete(id);
    }

}

export { DeleteOrdemProcedimentoUseCase };