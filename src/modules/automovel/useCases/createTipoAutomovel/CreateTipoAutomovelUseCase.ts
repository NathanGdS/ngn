import { ICreateTipoAutomovelDTO } from "@modules/automovel/dtos/ICreateTipoAutomovelDTO";
import { TipoAutomovel } from "@modules/automovel/infra/typeorm/entities/TipoAutomovel";
import { ITipoAutomovelRepository } from "@modules/automovel/repositories/ITipoAutomovelRepository";

class CreateTipoAutomovelUseCase {
    constructor(
        private tipoAutomovelRepository: ITipoAutomovelRepository
    ) {}

    async execute({description}: ICreateTipoAutomovelDTO): Promise<TipoAutomovel> {

        const tipoAutomovel = await this.tipoAutomovelRepository.create({description});

        return tipoAutomovel;

    }
}

export { CreateTipoAutomovelUseCase };
