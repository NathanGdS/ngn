import { Automovel } from "@modules/automovel/infra/typeorm/entities/Automovel";
import { AutomovelRepositoryInMemory } from "@modules/automovel/repositories/in-memory/AutomovelRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

class ListAutomovelUseCase {
    constructor(
        private automovelRepositoryInMemory: AutomovelRepositoryInMemory
    ) { } 
    
    async execute(): Promise<Automovel[]> {
        const automoveis = await this.automovelRepositoryInMemory.findAll();

        if (!automoveis) throw new AppError('No Automoveis found!');

        return automoveis;
    }
}

export { ListAutomovelUseCase };