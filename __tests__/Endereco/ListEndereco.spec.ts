import { EnderecoRepositoryInMemory } from "@modules/endereco/repositories/in-memory/EnderecoRepositoryInMemory";
import { ListEnderecoUseCase } from "@modules/endereco/useCases/listEndereco/ListEnderecoUseCase";
import { AppError } from "@shared/errors/AppError";

let enderecoRepositoryInMemory: EnderecoRepositoryInMemory;
let listEnderecoUseCase: ListEnderecoUseCase;

describe("List all Endereco", () => {
    beforeEach(() => {
        enderecoRepositoryInMemory = new EnderecoRepositoryInMemory();
        listEnderecoUseCase = new ListEnderecoUseCase(enderecoRepositoryInMemory);
    });

    it("Should be able to list all Endereco", async () => {
        const enderecos = await listEnderecoUseCase.execute();

        expect(enderecos).toBeInstanceOf(Array);
    });

    it("Shouldn't be able to list all Endereco", async () => {
        expect(async () => {
            await listEnderecoUseCase.execute();
        }).rejects.toBeInstanceOf(AppError);
    });
});