import { TelefoneRepositoryInMemory } from "@modules/telefone/repositories/in-memory/TelefoneRepositoryInMemory";
import { CreateTelefoneUseCase } from "@modules/telefone/useCases/createTelefone/CreateTelefoneUseCase";
import { AppError } from "@shared/errors/AppError";

let telefoneRepositoryInMemory: TelefoneRepositoryInMemory;
let createTelefoneUseCase: CreateTelefoneUseCase;

describe("Create a new Telefone", () => {

    beforeEach(() => {
        telefoneRepositoryInMemory = new TelefoneRepositoryInMemory();
        createTelefoneUseCase = new CreateTelefoneUseCase(telefoneRepositoryInMemory);
    });

    it("Should be able to create a new Telefone", async () => {
        const telefone = await createTelefoneUseCase.execute({
            telNumber: '(11)96919-3021',
            customerId: '3dfc84c3-0216-4619-9947-8133ef8a3d51',
            userId: ''
        });

        expect(telefone).toHaveProperty("telNumber");
        expect(telefone).toHaveProperty("userId" || "customerId");
    });


    it("Shouldn't be able to create a new Telefone", async () => {
        expect(async () => {
            await createTelefoneUseCase.execute({
                telNumber: '(11)96919-3021',
                customerId: '3dfc84c3-0216-4619-9947-8133ef8a3d51',
                userId: ''
            });
            await createTelefoneUseCase.execute({
                telNumber: '(11)96919-3021',
                customerId: '',
                userId: 'f4a4e3c1-9458-4819-a8fc-57fd48860929'
            });
        }).rejects.toBeInstanceOf(AppError);
    }); 
});