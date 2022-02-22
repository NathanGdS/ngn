import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteUsuarioUseCase } from "./DeleteUsuarioUseCase";

class DeleteUsuarioController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;

            const deleteUsuarioUseCase = container.resolve(
                DeleteUsuarioUseCase
            );

            const usuario = await deleteUsuarioUseCase.execute(id);

            return response.status(200).json(usuario);
        } catch (e) {
            return response.status(400).json({ error: e.message });
        }
    }
}

export { DeleteUsuarioController };