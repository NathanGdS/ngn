import { ICreateTipoAutomovelDTO } from "@modules/automovel/dtos/ICreateTipoAutomovelDTO";
import { TipoAutomovel } from "@modules/automovel/infra/typeorm/entities/TipoAutomovel";
import { ITipoAutomovelRepository } from "@modules/automovel/repositories/ITipoAutomovelRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateTipoAutomovelUseCase {
    constructor(
        @inject("TipoAutomovelRepository")
        private tipoAutomovelRepository: ITipoAutomovelRepository
    ) {}

    async execute({description}: ICreateTipoAutomovelDTO): Promise<TipoAutomovel> {

        const tipoAutomovelExists = await this.tipoAutomovelRepository.findByDescription(description);

        if(tipoAutomovelExists) throw new AppError('Tipo Automovel already exists!');

        const tipoAutomovel = await this.tipoAutomovelRepository.create({description});

        return tipoAutomovel;

    }
}

export { CreateTipoAutomovelUseCase };
