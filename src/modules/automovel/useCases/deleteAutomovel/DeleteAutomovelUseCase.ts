import { IAutomovelRepository } from "@modules/automovel/repositories/IAutomovelRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteAutomovelUseCase {
    constructor(
        @inject("AutomovelRepository")
        private automovelRepository: IAutomovelRepository
    ) { }
    
    async execute(id: string): Promise<void> {
        this.automovelRepository.delete(id);
    }
}

export { DeleteAutomovelUseCase };