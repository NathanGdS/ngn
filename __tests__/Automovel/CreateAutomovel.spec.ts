import { AutomovelRepositoryInMemory } from "@modules/automovel/repositories/in-memory/AutomovelRepositoryInMemory";
import { CreateAutomovelUseCase } from "@modules/automovel/useCases/createAutomovel/CreateAutomovelUseCase";
import { ClienteRepositoryInMemory } from "@modules/cliente/repositories/in-memory/ClientesRepositoryInMemory";
import { UsuarioRepositoryInMemory } from "@modules/usuario/repositories/in-memory/UsuarioRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

let automovelRepositoryInMemory: AutomovelRepositoryInMemory;
let createAutomovelUseCase: CreateAutomovelUseCase;

describe("Create a new Automovel", () => {

    beforeEach(() => {
        automovelRepositoryInMemory = new AutomovelRepositoryInMemory();
        createAutomovelUseCase = new CreateAutomovelUseCase(automovelRepositoryInMemory);
    });

    it("Should be able to create a new Automovel", async () => {
        const automovel = await createAutomovelUseCase.execute(
            {
                autoPlate: "MDF-0180",
                autoModel: "HB20",
                autoBrand: "Hyundai",
                autoColor: "Prata",
                autoYear: 2020,
                autoRenavam: 93930850394,
                customerId: "151d2115-b56f-4135-902d-43b545c13977",
                autoTypeId: "12368c10-a917-4b4c-a9c4-a451875a84f6",
            }
        );

        expect(automovel).toHaveProperty("id");
        expect(automovel).toHaveProperty("autoPlate");
        expect(automovel).toHaveProperty("autoModel");
        expect(automovel).toHaveProperty("autoColor");
        expect(automovel).toHaveProperty("autoYear");
        expect(automovel).toHaveProperty("autoRenavam");
        expect(automovel).toHaveProperty("customerId");
        expect(automovel).toHaveProperty("autoTypeId");
    });

    it("Shouldn't be able to create a new Automovel if the user is not an administrator", async () => {
        expect(async () => {
            await createAutomovelUseCase.execute(
            {
                autoPlate: "MDF-0180",
                autoModel: "HB20",
                autoBrand: "Hyundai",
                autoColor: "Prata",
                autoYear: 2020,
                autoRenavam: 93930850394,
                customerId: "151d2115-b56f-4135-902d-43b545c13977",
                autoTypeId: "12368c10-a917-4b4c-a9c4-a451875a84f6",
            }
            );
        }).rejects.toBeInstanceOf(AppError);
    });
});