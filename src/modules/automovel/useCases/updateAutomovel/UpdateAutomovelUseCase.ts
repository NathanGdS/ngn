import { IUpdateAutomovelDTO } from "@modules/automovel/dtos/IUpdateAutomovelDTO";
import { Automovel } from "@modules/automovel/infra/typeorm/entities/Automovel";
import { IAutomovelRepository } from "@modules/automovel/repositories/IAutomovelRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class UpdateAutomovelUseCase {
    constructor(
        @inject("AutomovelRepository")
        private automovelRepository: IAutomovelRepository
    ) { }

    async execute({ id, plate, model, brand, color, year, renavam, typeId }: IUpdateAutomovelDTO): Promise<Automovel> {
        const automovelExists = await this.automovelRepository.findById(id);

        if (!automovelExists) throw new AppError('Automovel not exists!');
        
        const automovel = await this.automovelRepository.update({ id, plate, model, brand, color, year, renavam, typeId });

        return automovel;
    }
}

export { UpdateAutomovelUseCase };