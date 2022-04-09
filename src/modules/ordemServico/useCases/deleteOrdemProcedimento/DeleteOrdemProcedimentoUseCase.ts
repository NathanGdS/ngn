import { IOrdemProcedimentosRepository } from "@modules/ordemServico/repositories/IOrdemProcedimentosRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";


@injectable()
class DeleteOrdemProcedimentoUseCase {

    constructor(
        @inject("OrdemProcedimentosRepository")
        private ordemProcedimentosRepository: IOrdemProcedimentosRepository
    ) {}

    async execute(id: string): Promise<void> {
        const found = await this.ordemProcedimentosRepository.findById(id);
        if(!found) throw new AppError('Ordem informada não encontrada!');

        this.ordemProcedimentosRepository.delete(id);

    }

}

export { DeleteOrdemProcedimentoUseCase };