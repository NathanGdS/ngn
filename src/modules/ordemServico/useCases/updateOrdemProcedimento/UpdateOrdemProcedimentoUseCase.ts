import { IUpdateOrdemProcedimentoDTO } from "@modules/ordemServico/dtos/IUpdateOrdemProcedimentoDTO";
import { OrdemProcedimentos } from "@modules/ordemServico/infra/typeorm/entities/OrdemProcedimentos";
import { IOrdemProcedimentosRepository } from "@modules/ordemServico/repositories/IOrdemProcedimentosRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";



@injectable()
class UpdateOrdemProcedimentoUseCase {

    constructor(
        @inject("OrdemProcedimentosRepository")
        private ordemProcedimentosRepository: IOrdemProcedimentosRepository
    ) {}

    async execute(id:string, data: IUpdateOrdemProcedimentoDTO): Promise<OrdemProcedimentos> {
        const found = await this.ordemProcedimentosRepository.findById(id);
        if(!found) throw new AppError('Procedimento não encontrado!');

        return await this.ordemProcedimentosRepository.update(id, data);
    }

}

export { UpdateOrdemProcedimentoUseCase };