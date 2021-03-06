import { IUpdateOrdemPecaDTO } from "@modules/ordemServico/dtos/IUpdateOrdemPecaDTO";
import { OrdemPecas } from "@modules/ordemServico/infra/typeorm/entities/OrdemPecas";
import { IOrdemPecasRepository } from "@modules/ordemServico/repositories/IOrdemPecasRepository";
import { IOrdemServicoRepository } from "@modules/ordemServico/repositories/IOrdemServicoRepository";
import { IStatusOrdemRepository } from "@modules/ordemServico/repositories/IStatusOrdemRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class UpdateOrdemPecaUseCase {
    constructor(
        @inject("OrdemPecasRepository")
        private readonly ordemPecasRepository: IOrdemPecasRepository,
        @inject("OrdemServicoRepository")
        private readonly ordemServicoRepository: IOrdemServicoRepository,
        @inject("StatusOrdemRepository")
        private readonly statusOrdemRepository: IStatusOrdemRepository
    ) { }
    
    async execute(id: string, data: IUpdateOrdemPecaDTO): Promise<OrdemPecas> {
        const found = await this.ordemPecasRepository.findById(id)
        if (!found) throw new AppError('Peça não encontrada!')

        const ordemServico = await this.ordemServicoRepository.findById(found.ordemServicoId)
        const verifyOrdemStatus = (await this.statusOrdemRepository.findById(ordemServico.statusId)).statusNumber

        if(verifyOrdemStatus !== 1 && verifyOrdemStatus !== 6) throw new AppError('Peça não pode ser alterada!', 400)

        const ordemPeca =  await this.ordemPecasRepository.update(id, data)
        
        await this.ordemServicoRepository.recalculateTotal(ordemServico.id)

        return ordemPeca
    }
}

export { UpdateOrdemPecaUseCase };
