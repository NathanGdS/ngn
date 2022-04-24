import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteOrdemServicoUseCase } from "./DeleteOrdemServicoUseCase";

class DeleteOrdemServicoController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;

            const deleteOrdemServicoUseCase = container.resolve(
                DeleteOrdemServicoUseCase
            );
            
            await deleteOrdemServicoUseCase.execute(id);

            return response.status(200).end();

        } catch (e) {
            return response.status(e.statusCode).json({ error: e.message });
        }
    }

}

export { DeleteOrdemServicoController }