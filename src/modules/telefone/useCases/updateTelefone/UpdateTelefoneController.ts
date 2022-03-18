import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateTelefoneUseCase } from "./UpdateTelefoneUseCase";

class UpdateTelefoneController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const { number } = request.body
            
            const updateTelefoneUseCase = container.resolve(
                UpdateTelefoneUseCase
            );

            const telefone = await updateTelefoneUseCase.execute({id, number});
            
            return response.status(200).json(telefone);
        } catch (e) {
            return response.status(400).json({ error: e.message });
        }
    }
}

export { UpdateTelefoneController };