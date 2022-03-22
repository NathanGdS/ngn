import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteEnderecoUseCase } from "./DeleteEnderecoUseCase";

class DeleteEnderecoController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
          
            const deleteEnderecoUseCase = container.resolve(
                DeleteEnderecoUseCase
            );

            await deleteEnderecoUseCase.execute(id); 
        } catch (e) {
            return response.status(400).json({ error: e.message });
        }
    }
}

export { DeleteEnderecoController };