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
        this.tipoAutomovelRepository.delete(id);
    }

}

export { DeleteTipoAutomovelUseCase };