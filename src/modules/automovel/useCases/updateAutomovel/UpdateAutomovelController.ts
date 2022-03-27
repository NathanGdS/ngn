import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateAutomovelUseCase } from "./UpdateAutomovelUseCase";

class UpdateAutomovelController {

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const { plate, model, brand, color, year, renavam, typeId } = request.body

            const updateAutomovelUseCase = container.resolve(
                UpdateAutomovelUseCase
            )
            
            const automovel = await updateAutomovelUseCase.execute({ id, plate, model, brand, color, year, renavam, typeId })

            return response.status(200).json(automovel)
        } catch (e) {
            return response.status(400).json({ error: e.message })
        }
    }
}

export { UpdateAutomovelController };