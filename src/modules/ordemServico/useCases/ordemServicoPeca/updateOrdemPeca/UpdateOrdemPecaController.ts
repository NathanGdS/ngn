import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateOrdemPecaUseCase } from "./UpdateOrdemPecaUseCase";

class UpdateOrdemPecaController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const data = request.body
            
            const updateOrdemPecaUseCase = container.resolve(
                UpdateOrdemPecaUseCase
            )

            const ordemPeca = await updateOrdemPecaUseCase.execute(id, data)

            return response.status(200).json(ordemPeca)
        } catch (e) {
            return response.status(400).json({ error: e.message })
        }
    }
}

export { UpdateOrdemPecaController };