import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteTelefoneUseCase } from "./DeleteTelefoneUseCase";

class DeleteTelefoneController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            
            const deleteTelefoneUseCase = container.resolve(
                DeleteTelefoneUseCase
            );

            await deleteTelefoneUseCase.execute(id);

            return response.status(200).send();
        } catch (e) {
            return response.status(400).json({ error: e.message });
        }
    }
}

export { DeleteTelefoneController };