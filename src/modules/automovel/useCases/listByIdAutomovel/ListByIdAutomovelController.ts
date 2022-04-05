import e, { Request, Response } from "express";
import { container } from "tsyringe";
import { ListByIdAutomovelUseCase } from "./ListByIdAutomovelUseCase";

class ListByIdAutomovelController {
    async handle(request: Request, response: Response): Promise<Response>{
        try {
            const { id } = request.params
            
            const listByIdAutomovelUseCase = container.resolve(
                ListByIdAutomovelUseCase
            )

            const automovel = await listByIdAutomovelUseCase.execute(id)

            return response.status(200).json(automovel)
        } catch (e) {
            return response.status(400).json({ error: e.message })
        }
    }
}

export { ListByIdAutomovelController };