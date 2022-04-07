import { ICreateOrdemProcedimentosDTO } from "@modules/ordemServico/dtos/ICreateOrdemProcedimentosDTO";
import { OrdemPecas } from "@modules/ordemServico/infra/typeorm/entities/OrdemPecas";
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
        sequence,
        total_value,
        unit_value
    }: ICreateOrdemProcedimentosDTO): Promise<OrdemPecas> {
        const ordemProcedimento = await this.ordemProcedimentosRepository.create({
            sequence,
            description,
            unit_value,
            amount,
            total_value
        });

        return ordemProcedimento
    }
    
}

export { CreateOrdemProcedimentoUseCase };