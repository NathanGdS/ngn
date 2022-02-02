import { TipoAutomovel } from "@modules/automovel/infra/typeorm/entities/TipoAutomovel";
import { TipoAutomovelRepositoryInMemory } from "@modules/automovel/repositories/in-memory/TipoAutomovelRepositoryInMemory";
import { ListTipoAutomovelUseCase } from "@modules/automovel/useCases/listTipoAutomovel/ListTipoAutomovelUseCase";
import { AppError } from "@shared/errors/AppError";

let tipoAutomovelRepositoryInMemory: TipoAutomovelRepositoryInMemory;
let listTipoAutomovelUseCase: ListTipoAutomovelUseCase;

describe("List all Tipo Automovel", () => {

    beforeEach(() => {
        tipoAutomovelRepositoryInMemory = new TipoAutomovelRepositoryInMemory();
        listTipoAutomovelUseCase = new ListTipoAutomovelUseCase(tipoAutomovelRepositoryInMemory);
    });

    it("Should be able to list all Tipo Automovel", async () => {
        const tiposAutomovel = await listTipoAutomovelUseCase.execute();

        expect(tiposAutomovel).toBeInstanceOf(Array);
        
    });

    it("Shouldn't able to list all Tipo Automovel", async () => {
        expect(async () => {
            await listTipoAutomovelUseCase.execute();
        }).rejects.toBeInstanceOf(AppError);
    })
})