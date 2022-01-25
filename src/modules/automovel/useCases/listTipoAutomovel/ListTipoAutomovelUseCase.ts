import { TipoAutomovel } from "@modules/automovel/infra/typeorm/entities/TipoAutomovel";
import { ITipoAutomovelRepository } from "@modules/automovel/repositories/ITipoAutomovelRepository";
import { AppError } from "@shared/errors/AppError";

class ListTipoAutomovelUseCase {
    constructor(
        private tipoAutomovelRepository: ITipoAutomovelRepository
    ) { }
    
    async execute(): Promise<TipoAutomovel[]> {
        const tiposAutomovel = await this.tipoAutomovelRepository.findAll();

        if (!tiposAutomovel) throw new AppError('No Tipo Automovel found!');

        return tiposAutomovel;
    }
}

export { ListTipoAutomovelUseCase };