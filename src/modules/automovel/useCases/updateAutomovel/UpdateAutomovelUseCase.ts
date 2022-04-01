import { IUpdateAutomovelDTO } from "@modules/automovel/dtos/IUpdateAutomovelDTO";
import { Automovel } from "@modules/automovel/infra/typeorm/entities/Automovel";
import { IAutomovelRepository } from "@modules/automovel/repositories/IAutomovelRepository";
import { ITipoAutomovelRepository } from "@modules/automovel/repositories/ITipoAutomovelRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class UpdateAutomovelUseCase {
    constructor(
        @inject("AutomovelRepository")
        private automovelRepository: IAutomovelRepository,
        @inject("TipoAutomovelRepository")
        private tipoAutomovelRepository: ITipoAutomovelRepository
    ) { }
    
    async execute(id: string, data: IUpdateAutomovelDTO): Promise<Automovel> {

        const automovelExists = await this.automovelRepository.findById(id)

        if (!automovelExists) throw new AppError('Automóvel não existe!')


        // if (data.renavam){
        //     const renavamExists = await this.automovelRepository.findByRenavam(data.renavam)
        //     if (renavamExists && (data.renavam != automovelExists.renavam))
        //     throw new AppError('Este número de Renavam já foi cadastrado!')
        // }

        const automovel = await this.automovelRepository.update(id, data)

        return automovel
    }
}

export { UpdateAutomovelUseCase };