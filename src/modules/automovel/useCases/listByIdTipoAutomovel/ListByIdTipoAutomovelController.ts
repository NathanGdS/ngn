import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListByIdTipoAutomovelUseCase } from "./ListByIdTipoAutomovelUseCase";

class ListByIdTipoAutomovelController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            
            const listByIdTipoAutomovelUseCase = container.resolve(
                ListByIdTipoAutomovelUseCase
            )

            const tipoAutomovel = await listByIdTipoAutomovelUseCase.execute(id)

            return response.status(200).json(tipoAutomovel)
        } catch (e) {
            return response.status(400).json({ error: e.message })
        }
    }
}

export { ListByIdTipoAutomovelController };