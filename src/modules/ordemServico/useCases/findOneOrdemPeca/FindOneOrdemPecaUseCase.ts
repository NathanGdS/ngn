import { OrdemPecas } from "@modules/ordemServico/infra/typeorm/entities/OrdemPecas";
import { IOrdemPecasRepository } from "@modules/ordemServico/repositories/IOrdemPecasRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class FindOneOrdemPecaUseCase {
    constructor(
        @inject("OrdemPecasRepository")
        private ordemPecaRepository: IOrdemPecasRepository
    ) { }
    
    async execute(id: string): Promise<OrdemPecas> {
        const ordemPeca = await this.ordemPecaRepository.findById(id)

        if (!ordemPeca) throw new AppError('Peça não encontrada!')

        return ordemPeca
    }
}

export { FindOneOrdemPecaUseCase };