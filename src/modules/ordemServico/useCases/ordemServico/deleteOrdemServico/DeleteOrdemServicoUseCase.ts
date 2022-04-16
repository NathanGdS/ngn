import { inject, injectable } from "tsyringe";
import { IOrdemServicoRepository } from "@modules/ordemServico/repositories/IOrdemServicoRepository";
import { AppError } from "@shared/errors/AppError";


@injectable()
class DeleteOrdemServicoUseCase {

    constructor (
        @inject("OrdemServicoRepository")
        private readonly ordemServicoRepository: IOrdemServicoRepository
    ) {}

    async execute(id: string): Promise<void> {
        const found = await this.ordemServicoRepository.findById(id);
        if (!found) throw new AppError('Ordem não encontrada!', 404);

        this.ordemServicoRepository.delete(id);
    }

}

export { DeleteOrdemServicoUseCase };