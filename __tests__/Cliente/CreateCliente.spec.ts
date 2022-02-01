import { ClienteRepositoryInMemory } from "@modules/cliente/repositories/in-memory/ClienteRepositoryInMemory";
import { CreateClienteUseCase } from "@modules/cliente/useCases/createCliente/CreateClienteUseCase";
import { AppError } from "@shared/errors/AppError";


let clienteRepositoryInMemory: ClienteRepositoryInMemory;
let createClienteUseCase: CreateClienteUseCase;

describe("Create a new Cliente", () => {

    beforeEach(() => {
        clienteRepositoryInMemory = new ClienteRepositoryInMemory();
        createClienteUseCase = new CreateClienteUseCase(clienteRepositoryInMemory);
    });


    it('Should be able to create a new Cliente', async () => {
        const cliente = await createClienteUseCase.execute({
            name: 'Nathan Felipe Guerlando', 
            cpf: '484.021.578-23',
            rg: '55.697.979-5',
            birthDate: new Date('2001-02-07'),
            email: 'nathanfguerlando@gmail.com'
        });

        expect(cliente).toHaveProperty("id");
        expect(cliente).toHaveProperty("name");
        expect(cliente).toHaveProperty("cpf");
        expect(cliente).toHaveProperty("rg");
        expect(cliente).toHaveProperty("birthDate");
        expect(cliente).toHaveProperty("email");
        
    });

    it("Shouldn't be able to create a new Cliente if the CPF already exists", async() => {
        expect(async() => {
           await createClienteUseCase.execute({
               name: 'Nathan Felipe Guerlando', 
               cpf: '484.021.578-23',
               rg: '55.697.979-5',
               birthDate: new Date('2001 02 07'),
               email: 'nathanfguerlando@gmail.com'
            });
           await createClienteUseCase.execute({
                name: 'Nathan Felipe Guerlando', 
               cpf: '484.021.578-23',
               rg: '55.697.979-5',
               birthDate: new Date('2001-02-07'),
               email: 'nathanfguerlando@gmail.com'
            });
        }).rejects.toBeInstanceOf(AppError);
    });

});