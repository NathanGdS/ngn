import { IUpdateOrdemPecaDTO } from "@modules/ordemServico/dtos/IUpdateOrdemPecaDTO";
import { OrdemPecas } from "@modules/ordemServico/infra/typeorm/entities/OrdemPecas";
import { IOrdemPecasRepository } from "@modules/ordemServico/repositories/IOrdemPecasRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class UpdateOrdemPecaUseCase {
    constructor(
        @inject("OrdemPecasRepository")
        private ordemPecasRepository: IOrdemPecasRepository
    ) { }
    
    async execute(id: string, data: IUpdateOrdemPecaDTO): Promise<OrdemPecas> {
        const found = await this.ordemPecasRepository.findById(id)
        if (!found) throw new AppError('Peça não encontrada!')

        return await this.ordemPecasRepository.update(id, data)
    }
}

export { UpdateOrdemPecaUseCase };
