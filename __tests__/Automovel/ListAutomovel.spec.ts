import { AutomovelRepositoryInMemory } from "@modules/automovel/repositories/in-memory/AutomovelRepositoryInMemory";
import { ListAutomovelUseCase } from "@modules/automovel/useCases/listAutomovel/ListAutomovelUseCase";
import { AppError } from "@shared/errors/AppError";

let automovelRepositoryInMemory: AutomovelRepositoryInMemory;
let listAutomovelUseCase: ListAutomovelUseCase;

describe("List all Automoveis", () => {
    
    beforeEach(() => {
        automovelRepositoryInMemory = new AutomovelRepositoryInMemory();
        listAutomovelUseCase = new ListAutomovelUseCase(automovelRepositoryInMemory);
    });

    it("Should be able to list all Automovel", async () => {
        const automovel = await listAutomovelUseCase.execute();

        expect(automovel).toBeInstanceOf(Array);
    });

    it("Shouldn't be able to list all Automovel", async () => {
        expect(async () => {
            await listAutomovelUseCase.execute();
        }).rejects.toBeInstanceOf(AppError);
    });
});