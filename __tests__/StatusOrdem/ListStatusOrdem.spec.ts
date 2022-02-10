import { StatusOrdemRepositoryInMemory } from "@modules/ordemServico/repositories/in-memory/StatusOrdemRepositoryInMemory";
import { ListStatusOrdemUseCase } from "@modules/ordemServico/useCases/listStatusOrdem/ListStatusOrdemUseCase";
import { AppError } from "@shared/errors/AppError";

let statusOrdemRepositoryInMemory: StatusOrdemRepositoryInMemory;
let listStatusOrdemUseCase: ListStatusOrdemUseCase;

describe("List all Status", () => {

    beforeEach(() => {
        statusOrdemRepositoryInMemory = new StatusOrdemRepositoryInMemory();
        listStatusOrdemUseCase = new ListStatusOrdemUseCase(statusOrdemRepositoryInMemory);
    });

    it("Should be able to list all Status", async () => {
        const statusOrdem = await listStatusOrdemUseCase.execute();

        expect(statusOrdem).toBeInstanceOf(Array);
    });

    it("Shouldn't be able to list all Status", async () => {
        expect(async () => {
            await listStatusOrdemUseCase.execute();
        }).rejects.toBeInstanceOf(AppError);
    });
});