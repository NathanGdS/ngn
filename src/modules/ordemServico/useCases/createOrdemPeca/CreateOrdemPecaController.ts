import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateOrdemPecaUseCase } from "./CreateOrdemPecaUseCase";

class CreateOrdemPecaController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { description, unit_value, amount } = request.body

            const createOrdemPecaUseCase = container.resolve(
                CreateOrdemPecaUseCase
            )

            const ordemPeca = await createOrdemPecaUseCase.execute({
                description,
                unit_value,
                amount
            })

            return response.status(201).json(ordemPeca)

        } catch (e) {
            return response.status(400).json({ error: e.message })
        }
    }
}

export { CreateOrdemPecaController };