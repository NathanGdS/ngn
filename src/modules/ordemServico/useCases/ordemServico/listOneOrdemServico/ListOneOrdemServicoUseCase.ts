import { OrdemServico } from "@modules/ordemServico/infra/typeorm/entities/OrdemServico";
import { IOrdemServicoRepository } from "@modules/ordemServico/repositories/IOrdemServicoRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";


@injectable()
class ListOneOrdemServicoUseCase {

    constructor (
        @inject("OrdemServicoRepository")
        private readonly ordemServicoRepository: IOrdemServicoRepository
    ) {}

    async execute (id: string): Promise<OrdemServico> {
        const founded: OrdemServico = await this.ordemServicoRepository.findById(id);
        if (!founded) throw new AppError('Ordem não encontrada!', 404);

        return founded;
    }
}

export { ListOneOrdemServicoUseCase }