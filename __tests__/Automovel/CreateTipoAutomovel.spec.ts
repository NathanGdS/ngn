import { TipoAutomovelRepositoryInMemory } from "@modules/automovel/repositories/in-memory/TipoAutomovelRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateTipoAutomovelUseCase } from "../../src/modules/automovel/useCases/createTipoAutomovel/CreateTipoAutomovelUseCase";

let tipoAutomovelRepositoryInMemory: TipoAutomovelRepositoryInMemory;
let createTipoAutomovelUseCase: CreateTipoAutomovelUseCase;

describe("Create a new Tipo Automovel", () => {

    beforeEach(() => {
        tipoAutomovelRepositoryInMemory = new TipoAutomovelRepositoryInMemory();
        createTipoAutomovelUseCase = new CreateTipoAutomovelUseCase(tipoAutomovelRepositoryInMemory);
    });


    it('Should be able to create a new Tipo Automovel', async () => {
        const tipoAutomovel = await createTipoAutomovelUseCase.execute({
            description: 'car',
        });

        expect(tipoAutomovel).toHaveProperty("id");
        expect(tipoAutomovel).toHaveProperty("description");
        
    });

    it("Shouldn't be able to create a new Tipo Automovel if the description already exists", async() => {
        expect(async() => {
           await createTipoAutomovelUseCase.execute({
                description: 'car',
            });
           await createTipoAutomovelUseCase.execute({
                description: 'car',
            });
        }).rejects.toBeInstanceOf(AppError);
    });

});