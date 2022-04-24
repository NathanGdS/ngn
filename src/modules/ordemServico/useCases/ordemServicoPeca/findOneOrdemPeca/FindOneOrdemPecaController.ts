import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindOneOrdemPecaUseCase } from "./FindOneOrdemPecaUseCase";

class FindOneOrdemPecaController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            
            const findOneOrdemPecaUseCase = container.resolve(
                FindOneOrdemPecaUseCase
            )

            const ordemPeca = await findOneOrdemPecaUseCase.execute(id)

            return response.status(200).json(ordemPeca)
        } catch (e) {
            return response.status(400).json({ error: e.message })
        }
    }
}

export { FindOneOrdemPecaController };