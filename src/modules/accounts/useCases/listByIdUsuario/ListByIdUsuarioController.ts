import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListByIdUsuarioUseCase } from "./ListByIdUsuarioUseCase";

class ListByIdUsuarioController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            
            const listByIdUsuarioUseCase = container.resolve(
                ListByIdUsuarioUseCase
            )

            const usuario = await listByIdUsuarioUseCase.execute(id)

            return response.status(200).json(usuario)
            
        } catch (e) {
            return response.status(400).json({ error: e.message })
        }
    }
}

export { ListByIdUsuarioController };