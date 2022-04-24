import { IAutomovelRepository } from "@modules/automovel/repositories/IAutomovelRepository";
import { ITipoAutomovelRepository } from "@modules/automovel/repositories/ITipoAutomovelRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteTipoAutomovelUseCase {
    constructor(
        @inject("TipoAutomovelRepository")
        private tipoAutomovelRepository: ITipoAutomovelRepository,

        @inject("AutomovelRepository")
        private automovelRepository: IAutomovelRepository
    ) {}
    
    async execute(id: string): Promise<void> {
        const tipoAutomovelIsUsed = await this.automovelRepository.findByType(id)

        if (tipoAutomovelIsUsed.length > 0) throw new AppError('Registro não pode ser excluído pois existe(m) Automóvel(is) cadastrado(s) com este Tipo Automóvel!')
        
        this.tipoAutomovelRepository.delete(id)
    }
}

export { DeleteTipoAutomovelUseCase };