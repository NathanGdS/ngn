import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateOrdemPecaUseCase } from "./CreateOrdemServicoPecaUseCase";

class CreateOrdemPecaController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { sequence, description, unit_value, amount, total_value } = request.body

            const createOrdemPecaUseCase = container.resolve(
                CreateOrdemPecaUseCase
            )

            const ordemPeca = await createOrdemPecaUseCase.execute({
                sequence,
                description,
                unit_value,
                amount,
                total_value
            })

            return response.status(201).json(ordemPeca)

        } catch (e) {
            return response.status(400).json({ error: e.message })
        }
    }
}

export { CreateOrdemPecaController };