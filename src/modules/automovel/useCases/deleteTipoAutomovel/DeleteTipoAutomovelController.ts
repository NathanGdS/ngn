import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteTipoAutomovelUseCase } from "./DeleteTipoAutomovelUseCase";

class DeleteTipoAutomovelController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;

            const deleteTipoAutomovelUseCase = container.resolve(
                DeleteTipoAutomovelUseCase
            );

            await deleteTipoAutomovelUseCase.execute(id);

            return response.status(200).json({ message: "delete"});
        } catch (e) {
            return response.status(400).json({ error: e.message });
        }
    }
}

export { DeleteTipoAutomovelController };