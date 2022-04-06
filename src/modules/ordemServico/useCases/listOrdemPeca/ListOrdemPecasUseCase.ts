import { OrdemPecas } from "@modules/ordemServico/infra/typeorm/entities/OrdemPecas";
import { IOrdemPecasRepository } from "@modules/ordemServico/repositories/IOrdemPecasRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class ListOrdemPecasUseCase {
    constructor(
        @inject("OrdemPecasRepository")
        private ordemPecasRepository: IOrdemPecasRepository
    ) { }
    
    async execute(): Promise<OrdemPecas[]> {
        const ordemPecas = await this.ordemPecasRepository.findAll()
        
        return ordemPecas
    }
}

export { ListOrdemPecasUseCase };