import { OrdemProcedimentos } from "@modules/ordemServico/infra/typeorm/entities/OrdemProcedimentos";
import { IOrdemProcedimentosRepository } from "@modules/ordemServico/repositories/IOrdemProcedimentosRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListOrdemProcedimentosUseCase {
    constructor(
        @inject("OrdemProcedimentoRepository")
        private ordemProcedimentoRepository: IOrdemProcedimentosRepository
    ) { }

    async execute(): Promise<OrdemProcedimentos[]> {
        const statusOrdem = await this.ordemProcedimentoRepository.findAll();

        return statusOrdem;
    }

}

export { ListOrdemProcedimentosUseCase };