import { TipoAutomovel } from "@modules/automovel/infra/typeorm/entities/TipoAutomovel";
import { ITipoAutomovelRepository } from "@modules/automovel/repositories/ITipoAutomovelRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListTipoAutomovelUseCase {
    constructor(
        @inject("TipoAutomovelRepository")
        private tipoAutomovelRepository: ITipoAutomovelRepository
    ) { }
    
    async execute(): Promise<TipoAutomovel[]> {
        const tiposAutomovel = await this.tipoAutomovelRepository.findAll();

        return tiposAutomovel;
    }
}

export { ListTipoAutomovelUseCase };