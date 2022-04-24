import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteAutomovelUseCase } from "./DeleteAutomovelUseCase";

class DeleteAutomovelController {
    async handle(request: Request, response: Response): Promise<Response>{
        try {
            const { id } = request.params

            const deleteAutomovelUseCase = container.resolve(
                DeleteAutomovelUseCase
            )

            await deleteAutomovelUseCase.execute(id)

            return response.status(200).send();
        } catch (e) {
            return response.status(400).json({ error: e.message })
        }
    }
}

export { DeleteAutomovelController };