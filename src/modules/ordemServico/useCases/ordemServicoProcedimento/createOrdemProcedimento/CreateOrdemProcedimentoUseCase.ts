import { ICreateOrdemProcedimentosDTO } from "@modules/ordemServico/dtos/ICreateOrdemProcedimentosDTO";
import { OrdemProcedimentos } from "@modules/ordemServico/infra/typeorm/entities/OrdemProcedimentos";
import { IOrdemProcedimentosRepository } from "@modules/ordemServico/repositories/IOrdemProcedimentosRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateOrdemProcedimentoUseCase {
    constructor(
        @inject("OrdemProcedimentosRepository")
        private ordemProcedimentosRepository: IOrdemProcedimentosRepository
    ) { }

    async execute({
        amount,
        description,
        unit_value,
        ordemServicoId
    }: ICreateOrdemProcedimentosDTO): Promise<OrdemProcedimentos> {
        const ordemProcedimento = await this.ordemProcedimentosRepository.create({
            description,
            unit_value,
            amount,
            ordemServicoId
        });

        return ordemProcedimento
    }
    
}

export { CreateOrdemProcedimentoUseCase };