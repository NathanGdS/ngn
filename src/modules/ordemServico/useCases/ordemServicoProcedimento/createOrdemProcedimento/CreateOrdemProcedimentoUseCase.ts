import { ICreateOrdemProcedimentosDTO } from "@modules/ordemServico/dtos/ICreateOrdemProcedimentosDTO";
import { OrdemProcedimentos } from "@modules/ordemServico/infra/typeorm/entities/OrdemProcedimentos";
import { IOrdemProcedimentosRepository } from "@modules/ordemServico/repositories/IOrdemProcedimentosRepository";
import { IOrdemServicoRepository } from "@modules/ordemServico/repositories/IOrdemServicoRepository";
import { IStatusOrdemRepository } from "@modules/ordemServico/repositories/IStatusOrdemRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateOrdemProcedimentoUseCase {
    constructor(
        @inject("OrdemProcedimentosRepository")
        private ordemProcedimentosRepository: IOrdemProcedimentosRepository,
        @inject("OrdemServicoRepository")
        private ordemServicoRepository: IOrdemServicoRepository,
        @inject("StatusOrdemRepository")
        private statusOrdemRepository: IStatusOrdemRepository
    ) { }

    async execute({
        amount,
        description,
        unit_value,
        ordemServicoId
    }: ICreateOrdemProcedimentosDTO): Promise<OrdemProcedimentos> {
        const found = await this.ordemServicoRepository.findById(ordemServicoId)
        const verifyOrdemStatus = await this.statusOrdemRepository.findById(found.statusId)

        if (verifyOrdemStatus.statusNumber !== (1 || 6)) throw new Error("Procedimento não pode ser criado!")

        const ordemProcedimento = await this.ordemProcedimentosRepository.create({
            description,
            unit_value,
            amount,
            ordemServicoId
        })

        return ordemProcedimento
    }
    
}

export { CreateOrdemProcedimentoUseCase };