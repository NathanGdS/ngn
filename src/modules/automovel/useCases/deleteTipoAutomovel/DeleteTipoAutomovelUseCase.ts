import { ITipoAutomovelRepository } from "@modules/automovel/repositories/ITipoAutomovelRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteTipoAutomovelUseCase {
    constructor(
        @inject("TipoAutomovelRepository")
        private tipoAutomovelRepository: ITipoAutomovelRepository
    ) {}
    
    async execute(id: string): Promise<void> {
        const tipoAutomovelExists = await this.tipoAutomovelRepository.findById(id);

        if (!tipoAutomovelExists) throw new AppError('Tipo Automovel not exists!');

        await this.tipoAutomovelRepository.delete(id);
    }

}

export { DeleteTipoAutomovelUseCase };