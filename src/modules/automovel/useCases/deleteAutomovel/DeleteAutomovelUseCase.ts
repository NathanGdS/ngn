import { IAutomovelRepository } from "@modules/automovel/repositories/IAutomovelRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteAutomovelUseCase {
    constructor(
        @inject("AutomovelRepository")
        private automovelRepository: IAutomovelRepository
    ) {}

    async execute(id: string): Promise<void> {
        const automovelExists = await this.automovelRepository.findById(id);

        if (!automovelExists) throw new AppError('Automovel not exists!');

        await this.automovelRepository.delete(id);
    }
}

export { DeleteAutomovelUseCase };