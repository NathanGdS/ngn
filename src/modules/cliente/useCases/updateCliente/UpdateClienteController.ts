import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateClienteUseCase } from "./UpdateClienteUseCase";

class UpdateClienteController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            const { name, cpf, rg, birthDate, email } = request.body;

            const updateClienteUseCase = container.resolve(
                UpdateClienteUseCase
            );

            const cliente = updateClienteUseCase.execute({ id, name, rg, cpf, birthDate, email });

            return response.status(200).json(cliente);
        } catch (e) {
            return response.status(400).json({ error: e.message });
        }
    }
}

export { UpdateClienteController };