import e, { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateStatusOrdemServicoUseCase } from "./UpdateStatusOrdemServicoUseCase";

class UpdateStatusOrdemServicoController {
    async handle(request: Request, response: Response): Promise<Response> { 
        try {
            const { id } = request.params
            const { statusId } = request.body

            const updateStatusOrdemServicoUseCase = container.resolve(
                UpdateStatusOrdemServicoUseCase
            )

            const ordemServico = await updateStatusOrdemServicoUseCase.execute(id, statusId)

            return response.status(200).json(ordemServico)
        } catch (e) {
            return response.status(400).json({ error: e.message })
        }
    }
}

export { UpdateStatusOrdemServicoController };