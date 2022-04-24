import { IOrdemPecasRepository } from "@modules/ordemServico/repositories/IOrdemPecasRepository";
import { IOrdemServicoRepository } from "@modules/ordemServico/repositories/IOrdemServicoRepository";
import { IStatusOrdemRepository } from "@modules/ordemServico/repositories/IStatusOrdemRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteOrdemPecaUseCase {
    constructor(
        @inject("OrdemPecasRepository")
        private ordemPecasRepository: IOrdemPecasRepository,
        @inject("OrdemServicoRepository")
        private ordemServicoRepository: IOrdemServicoRepository,
        @inject("StatusOrdemRepository")
        private statusOrdemRepository: IStatusOrdemRepository,
    ) { }
    
    async execute(id: string): Promise<void> {
        const found = await this.ordemPecasRepository.findById(id)
        if (!found) throw new AppError('Peça não encontrada!', 400)
        
        const ordemServico = await this.ordemServicoRepository.findById(found.ordemServicoId)
        const verifyOrdemStatus = (await this.statusOrdemRepository.findById(ordemServico.statusId)).statusNumber

        if (verifyOrdemStatus !== 1 && verifyOrdemStatus !== 6 && verifyOrdemStatus !== 7) throw new AppError('Peça não pode ser deletada!', 400)

        this.ordemPecasRepository.delete(id)

        await this.ordemServicoRepository.recalculateTotal(ordemServico.id)
    }
}

export { DeleteOrdemPecaUseCase };