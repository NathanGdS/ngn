import { Automovel } from "@modules/automovel/infra/typeorm/entities/Automovel";
import { AutomovelRepositoryInMemory } from "@modules/automovel/repositories/in-memory/AutomovelRepositoryInMemory";
import { inject, injectable } from "tsyringe";

@injectable()
class ListAutomovelUseCase {
    constructor(
        @inject("AutomovelRepository")
        private automovelRepositoryInMemory: AutomovelRepositoryInMemory
    ) { } 
    
    async execute(): Promise<Automovel[]> {
        const automoveis = await this.automovelRepositoryInMemory.findAll();

        return automoveis;
    }
}

export { ListAutomovelUseCase };