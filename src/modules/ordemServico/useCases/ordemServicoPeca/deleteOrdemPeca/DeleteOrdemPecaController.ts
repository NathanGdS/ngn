import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteOrdemPecaUseCase } from "./DeleteOrdemPecaUseCase";

class DeleteOrdemPecaController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            
            const deleteOrdemPecaUseCase = container.resolve(
                DeleteOrdemPecaUseCase
            )

            await deleteOrdemPecaUseCase.execute(id)

            return response.status(200).send()
        } catch (e) {
            return response.status(400).json({ error: e.message })
        }
    }
}

export { DeleteOrdemPecaController };