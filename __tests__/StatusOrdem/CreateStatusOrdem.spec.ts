import { StatusOrdemRepositoryInMemory } from "@modules/ordemServico/repositories/in-memory/StatusOrdemRepositoryInMemory";
import { CreateStatusOrdemUseCase } from "@modules/ordemServico/useCases/createStatusOrdem/CreateStatusOrdemUseCase";
import { AppError } from "@shared/errors/AppError";

let statusOrdemRepositoryInMemory: StatusOrdemRepositoryInMemory;
let createStatusOrdemUseCase: CreateStatusOrdemUseCase;

describe("Create a new Status Ordem", () => {
    
    beforeEach(() => {
        statusOrdemRepositoryInMemory = new StatusOrdemRepositoryInMemory();
        createStatusOrdemUseCase = new CreateStatusOrdemUseCase(statusOrdemRepositoryInMemory);
    });

    it('Should be able to create a new Status Ordem', async () => {
        const statusOrdem = await createStatusOrdemUseCase.execute({
            description: 'Aberta',
            number: 1
        });

        expect(statusOrdem).toHaveProperty("id");
        expect(statusOrdem).toHaveProperty("description");
        expect(statusOrdem).toHaveProperty("number");
    });

    it("Shouldn't be able to create a new Status Ordem if the description already exists", async () => {
        expect(async () => {
            await createStatusOrdemUseCase.execute({
                description: 'Aberta',
                number: 1
            });
            await createStatusOrdemUseCase.execute({
                description: 'Aberta',
                number: 1
            });
            
        }).rejects.toBeInstanceOf(AppError);
    });
});