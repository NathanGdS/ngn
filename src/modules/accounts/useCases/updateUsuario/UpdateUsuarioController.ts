import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUsuarioUseCase } from "./UpdateUsuarioUseCase";

class UpdateUsuarioController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const { name, cpf, email, isAdmin } = request.body
            
            const updateUsuarioUseCase = container.resolve(
                UpdateUsuarioUseCase
            )

            const usuario = await updateUsuarioUseCase.execute({ id, name, cpf, email, isAdmin })

            return response.status(200).json(usuario)
        } catch (e) {
            return response.status(400).json({ error: e.message })
        }
    }
}

export { UpdateUsuarioController };