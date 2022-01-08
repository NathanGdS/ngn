import { TipoAutomovelRepositoryInMemory } from "@modules/automovel/repositories/in-memory/TipoAutomovelRepositoryInMemory";
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

        console.log(tipoAutomovel);

        expect(tipoAutomovel).toHaveProperty("id");
        
    });

});