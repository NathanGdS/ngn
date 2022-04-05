import { Automovel } from "@modules/automovel/infra/typeorm/entities/Automovel";
import { IAutomovelRepository } from "@modules/automovel/repositories/IAutomovelRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class ListByIdAutomovelUseCase {
    constructor(
        @inject("AutomovelRepository")
        private automovelRepository: IAutomovelRepository
    ) { }
    
    async execute(id: string): Promise<Automovel> {
        const automovel = await this.automovelRepository.findById(id)

        if (!automovel) throw new AppError('Este Automóvel não existe!')
        
        return automovel
    }
}

export { ListByIdAutomovelUseCase };