import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteClienteUseCase } from "./DeleteClienteUseCase";

class DeleteClienteController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;

            const deleteClienteUseCase = container.resolve(
                DeleteClienteUseCase
            );

            const cliente = await deleteClienteUseCase.execute(id);

            return response.status(200).json(cliente);
        } catch (e) {
            return response.status(400).json({ error: e.message });
        }
    }
}

export { DeleteClienteController };