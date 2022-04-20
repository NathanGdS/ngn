import { IUpdateOrdemProcedimentoDTO } from "@modules/ordemServico/dtos/IUpdateOrdemProcedimentoDTO";
import { OrdemProcedimentos } from "@modules/ordemServico/infra/typeorm/entities/OrdemProcedimentos";
import { IOrdemProcedimentosRepository } from "@modules/ordemServico/repositories/IOrdemProcedimentosRepository";
import { IOrdemServicoRepository } from "@modules/ordemServico/repositories/IOrdemServicoRepository";
import { IStatusOrdemRepository } from "@modules/ordemServico/repositories/IStatusOrdemRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class UpdateOrdemProcedimentoUseCase {

    constructor(
        @inject("OrdemProcedimentosRepository")
        private readonly ordemProcedimentosRepository: IOrdemProcedimentosRepository,
        @inject("OrdemServicoRepository")
        private readonly ordemServicoRepository: IOrdemServicoRepository,
        @inject("StatusOrdemRepository")
        private readonly statusOrdemRepository: IStatusOrdemRepository
    ) { }
    
    async execute(id:string, data: IUpdateOrdemProcedimentoDTO): Promise<OrdemProcedimentos> {
        const found = await this.ordemProcedimentosRepository.findById(id)
        if(!found) throw new AppError('Procedimento não encontrado!')

        const ordemServico = await this.ordemServicoRepository.findById(found.ordemServicoId)
        const verifyOrdemStatus = (await this.statusOrdemRepository.findById(ordemServico.statusId)).statusNumber

        if (verifyOrdemStatus !== 1 && verifyOrdemStatus !== 6) throw new AppError('Procedimento não pode ser alterado!', 400)
        
        return await this.ordemProcedimentosRepository.update(id, data)
    }
}

export { UpdateOrdemProcedimentoUseCase };