import { OrdemProcedimentos } from "@modules/ordemServico/infra/typeorm/entities/OrdemProcedimentos";
import { IOrdemProcedimentosRepository } from "@modules/ordemServico/repositories/IOrdemProcedimentosRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";


@injectable()
class FindOneOrdemProcedimentosUseCase {

    constructor (
        @inject("OrdemProcedimentosRepository")
        private ordemProcedimentosRepository: IOrdemProcedimentosRepository
    ) {}
 
    async execute (id:string): Promise<OrdemProcedimentos> {
        const ordemProcedimento = await this.ordemProcedimentosRepository.findById(id);
        if (!ordemProcedimento) throw new AppError('Ordem não encontrada!');

        return ordemProcedimento;
    }

}

export { FindOneOrdemProcedimentosUseCase };
