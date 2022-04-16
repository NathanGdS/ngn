import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateOrdemProcedimentoUseCase } from "./CreateOrdemProcedimentoUseCase";

class CreateOrdemProcedimentoController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { description, unit_value, amount, ordemServicoId } = request.body

            const createOrdemProcedimentoUseCase = container.resolve(
                CreateOrdemProcedimentoUseCase
            )

            const ordemPeca = await createOrdemProcedimentoUseCase.execute({
                amount,
                description,
                unit_value,
                ordemServicoId
            })

            return response.status(201).json(ordemPeca)

        } catch (e) {
            return response.status(400).json({ error: e.message })
        }
    }
}

export { CreateOrdemProcedimentoController };