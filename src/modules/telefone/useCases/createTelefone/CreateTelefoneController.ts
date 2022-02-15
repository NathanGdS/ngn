import { Request, Response } from "express"; 
import { container } from "tsyringe";
import { CreateTelefoneUseCase } from "./CreateTelefoneUseCase";

class CreateTelefoneController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { telNumber, customerId, userId } = request.body;

            const createTelefoneUseCase = container.resolve(
                CreateTelefoneUseCase
            );

            const telefone = await createTelefoneUseCase.execute({ telNumber, customerId, userId });

            return response.status(200).json(telefone);
        } catch (e) {
            return response.status(400).json({ error: e.message });
        }
    }
}

export { CreateTelefoneController };