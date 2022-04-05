import { TipoAutomovel } from "@modules/automovel/infra/typeorm/entities/TipoAutomovel";
import { ITipoAutomovelRepository } from "@modules/automovel/repositories/ITipoAutomovelRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class ListByIdTipoAutomovelUseCase {
    constructor(
        @inject("TipoAutomovelRepository")
        private tipoAutomovelRepository: ITipoAutomovelRepository
    ) { }

    async execute(id: string): Promise<TipoAutomovel> {
        const tipoAutomovel = await this.tipoAutomovelRepository.findById(id)

        if (!tipoAutomovel) throw new AppError('Este Tipo de Automóvel não existe!')

        return tipoAutomovel
    }
}

export { ListByIdTipoAutomovelUseCase };