import { IUpdateTipoAutomovelDTO } from "@modules/automovel/dtos/IUpdateTipoAutomovelDTO";
import { TipoAutomovel } from "@modules/automovel/infra/typeorm/entities/TipoAutomovel";
import { ITipoAutomovelRepository } from "@modules/automovel/repositories/ITipoAutomovelRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class UpdateTipoAutomovelUseCase {
    constructor(
        @inject("TipoAutomovelRepository")
        private tipoAutomovelRepository: ITipoAutomovelRepository
    ) { }
    
    async execute({ id, description }: IUpdateTipoAutomovelDTO): Promise<TipoAutomovel> {
        
        const tipoAutomovelExists = await this.tipoAutomovelRepository.findById(id);

        if (!tipoAutomovelExists) throw new AppError('Tipo Automovel não existe!');

        const descriptionExists = await this.tipoAutomovelRepository.findByDescription(description);

        if (descriptionExists && (description != tipoAutomovelExists.description))
            throw new AppError('Já existe um Tipo Automovel com essa descrição!');
        
        const tipoAutomovel = await this.tipoAutomovelRepository.update(id, description);
        
        return tipoAutomovel;
    }
}

export { UpdateTipoAutomovelUseCase };