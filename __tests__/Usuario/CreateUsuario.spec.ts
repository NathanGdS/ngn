import { UsuarioRepositoryInMemory } from "@modules/usuario/repositories/in-memory/UsuarioRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateUsuarioUseCase } from "@modules/usuario/useCases/createUsuario/CreateUsuarioUseCase";

let usuarioRepositoryInMemory: UsuarioRepositoryInMemory;
let createUsuarioUseCase: CreateUsuarioUseCase;

describe("Create a new Usuario", () => {

    beforeEach(() => {
        usuarioRepositoryInMemory = new UsuarioRepositoryInMemory();
        createUsuarioUseCase = new CreateUsuarioUseCase(usuarioRepositoryInMemory);
    });

    it('Should be able to create a new Cliente', async () => {
        const usuario = await createUsuarioUseCase.execute({
            name: 'Nathan',
            password: '123',
            rg: '55.697.979-5',
            cpf: '484.021.578-23',
            birthDate: new Date('2001 07 02'),
            email: 'teste@gmail.com'
        });

        expect(usuario).toHaveProperty("id");
        expect(usuario).toHaveProperty("name");
        expect(usuario).toHaveProperty("password");
        expect(usuario).toHaveProperty("rg");
        expect(usuario).toHaveProperty("cpf");
        expect(usuario).toHaveProperty("birthDate");
        expect(usuario).toHaveProperty("email");
    });

    it("Shouldn't be able to create a new Usuario if the cpf already exists", async () => {
        expect(async () => {
            await createUsuarioUseCase.execute({
                name: 'Nathan',
                password: '123',
                rg: '55.697.979-5',
                cpf: '484.021.578-23',
                birthDate: new Date('2001 07 02'),
                email: 'teste@gmail.com'
            });
            await createUsuarioUseCase.execute({
                name: 'Nathan',
                password: '123',
                rg: '55.697.979-5',
                cpf: '484.021.578-23',
                birthDate: new Date('2001 07 02'),
                email: 'teste@gmail.com'
            });
        }).rejects.toBeInstanceOf(AppError);
    });
})