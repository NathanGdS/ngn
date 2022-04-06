import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListOrdemPecasUseCase } from "./ListOrdemPecasUseCase";

class ListOrdemPecasController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const listOrdemPecasUseCase = container.resolve(
                ListOrdemPecasUseCase
            )

            const ordemPecas = await listOrdemPecasUseCase.execute()

            return response.status(200).json(ordemPecas)
        } catch (e) {
            return response.status(400).json({ error: e.message })
        }
    }
}

export { ListOrdemPecasController };