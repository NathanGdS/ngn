import { TelefoneRepositoryInMemory } from "@modules/telefone/repositories/in-memory/TelefoneRepositoryInMemory";
import { ListTelefoneUseCase } from "@modules/telefone/useCases/listTelefone/ListTelefoneUseCase";
import { AppError } from "@shared/errors/AppError";

let telefoneRepositoryInMemory: TelefoneRepositoryInMemory;
let listTelefoneUseCase: ListTelefoneUseCase;

describe("List all Telefone", () => {
    beforeEach(() => {
        telefoneRepositoryInMemory = new TelefoneRepositoryInMemory();
        listTelefoneUseCase = new ListTelefoneUseCase(telefoneRepositoryInMemory);
    });

    it("Should be able to list all Telefone", async () => {
        const telefones = await listTelefoneUseCase.execute();

        expect(telefones).toBeInstanceOf(Array);
    });

    it("Shouldn't be able to list all Telefones", async () => {
        expect(async () => {
            await listTelefoneUseCase.execute();
        }).rejects.toBeInstanceOf(AppError);
    });
});