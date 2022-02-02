import { UsuarioRepositoryInMemory } from "@modules/usuario/repositories/in-memory/UsuarioRepositoryInMemory";
import { ListUsuarioUseCase } from "@modules/usuario/useCases/listUsuario/ListUsuarioUseCase";
import { AppError } from "@shared/errors/AppError";

let usuarioRepositoryInMemory: UsuarioRepositoryInMemory;
let listUsuarioUseCase: ListUsuarioUseCase;

describe("List all Usuario", () => {
    
    beforeEach(() => {
        usuarioRepositoryInMemory = new UsuarioRepositoryInMemory();
        listUsuarioUseCase = new ListUsuarioUseCase(usuarioRepositoryInMemory);
    });

    it("Should be able to list all Usuario", async () => {
        const usuarios = await listUsuarioUseCase.execute();

        expect(usuarios).toBeInstanceOf(Array);
    });

    it("Shouldn't be able to list all Usuario", async () => {
        expect(async () => {
            await listUsuarioUseCase.execute();
        }).rejects.toBeInstanceOf(AppError);
    });
});