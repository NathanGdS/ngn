import { ClienteRepositoryInMemory } from "@modules/cliente/repositories/in-memory/ClienteRepositoryInMemory";
import { ListClienteUseCase } from "@modules/cliente/useCases/listCliente/ListClienteUseCase";
import { AppError } from "@shared/errors/AppError";

let clienteRepositoryInMemory: ClienteRepositoryInMemory;
let listClienteUseCase: ListClienteUseCase;

describe("List all Tipo Automovel", () => {

    beforeEach(() => {
        clienteRepositoryInMemory = new ClienteRepositoryInMemory();
        listClienteUseCase = new ListClienteUseCase(clienteRepositoryInMemory);
    });

    it("Should be able to list all Cliente", async () => {
        const cliente = await listClienteUseCase.execute();

        expect(cliente).toBeInstanceOf(Array);
        
    });

    it("Shouldn't able to list all Cliente", async () => {
        expect(async () => {
            await listClienteUseCase.execute();
        }).rejects.toBeInstanceOf(AppError);
    })
})