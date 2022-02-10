import { EnderecoRepositoryInMemory } from "@modules/endereco/repositories/in-memory/EnderecoRepositoryInMemory"
import { CreateEnderecoUseCase } from "@modules/endereco/useCases/createEndereco/CreateEnderecoUseCase";
import { AppError } from "@shared/errors/AppError";

let enderecoRepositoryInMemory: EnderecoRepositoryInMemory;
let createEnderecoUseCase: CreateEnderecoUseCase;

describe("Create a new Endereco", () => {

    beforeEach(() => {
        enderecoRepositoryInMemory = new EnderecoRepositoryInMemory();
        createEnderecoUseCase = new CreateEnderecoUseCase(enderecoRepositoryInMemory);
    });

    it("Should be able to create a new Endereco", async () => {
        const endereco = await createEnderecoUseCase.execute({
            addCep: "06083-090",
            addStreet: "Rua Clotilde Galesi",
            addNumber: 98,
            addSupplement: "Apartamento 11",
            addDistrict: "Vila Osasco",
            addTown: "Osasco",
            addFU: "SP",
            userId: "bb4625ab-b18a-4de1-ac2b-b63af472cb4d",
            customerId: ""
        });

        expect(endereco).toHaveProperty("id");
        expect(endereco).toHaveProperty("addCep");
        expect(endereco).toHaveProperty("addStreet");
        expect(endereco).toHaveProperty("addNumber");
        expect(endereco).toHaveProperty("addSupplement");
        expect(endereco).toHaveProperty("addDistrict");
        expect(endereco).toHaveProperty("addTown");
        expect(endereco).toHaveProperty("addFU");
        expect(endereco).toHaveProperty("userId" || "customerId");
    });

    it("Shouldn't be able to create a new Endereco if the user or customer already has an address", async () => {
        expect(async () => {
            await createEnderecoUseCase.execute({
                addCep: "06083-090",
                addStreet: "Rua Clotilde Galesi",
                addNumber: 98,
                addSupplement: "Apartamento 11",
                addDistrict: "Vila Osasco",
                addTown: "Osasco",
                addFU: "SP",
                userId: "bb4625ab-b18a-4de1-ac2b-b63af472cb4d",
                customerId: ""
            });
            await createEnderecoUseCase.execute({
                addCep: "06083-090",
                addStreet: "Rua Clotilde Galesi",
                addNumber: 98,
                addSupplement: "Apartamento 11",
                addDistrict: "Vila Osasco",
                addTown: "Osasco",
                addFU: "SP",
                userId: "bb4625ab-b18a-4de1-ac2b-b63af472cb4d",
                customerId: ""
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});