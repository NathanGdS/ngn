import { OrdemProcedimentos } from "@modules/ordemServico/infra/typeorm/entities/OrdemProcedimentos";
import { IOrdemProcedimentosRepository } from "@modules/ordemServico/repositories/IOrdemProcedimentosRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListOrdemProcedimentosUseCase {
    constructor(
        @inject("OrdemProcedimentosRepository")
        private ordemProcedimentosRepository: IOrdemProcedimentosRepository
    ) { }

    async execute(): Promise<OrdemProcedimentos[]> {
        const statusOrdem = await this.ordemProcedimentosRepository.findAll();

        return statusOrdem;
    }

}

export { ListOrdemProcedimentosUseCase };