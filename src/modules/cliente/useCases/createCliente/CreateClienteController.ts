import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateClienteUseCase } from "./CreateClienteUseCase";

class CreateClienteController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { name, email, cpf, rg, birthDate } = request.body;

            const createClienteUseCase = container.resolve(
                CreateClienteUseCase
            );

            const cliente = await createClienteUseCase.execute({ name, email, cpf, rg, birthDate });

            return response.status(201).json(cliente);
        } catch (e) {
            return response.status(400).json({ error: e.message });
        }
    }
}

export { CreateClienteController };