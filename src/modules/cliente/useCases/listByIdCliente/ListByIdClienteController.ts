import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListByIdClienteUseCase } from "./ListByIdClienteUseCase";

class ListByIdClienteController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            
            const listByIdClienteUseCase = container.resolve(
                ListByIdClienteUseCase
            )

            const cliente = await listByIdClienteUseCase.execute(id)

            return response.status(200).json(cliente)
        } catch (e) {
            return response.status(400).json({ error: e.message })
        }
    }
}

export { ListByIdClienteController }; 