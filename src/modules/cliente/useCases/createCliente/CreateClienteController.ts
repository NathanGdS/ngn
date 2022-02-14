import { Request, Response } from "express"; 
import { container } from "tsyringe";

import { CreateClienteUseCase } from "./CreateClienteUseCase";

class CreateClienteController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { name, rg, cpf, birthDate, email } = request.body;
            
            const createClienteUseCase = container.resolve(
                CreateClienteUseCase
            );

            const cliente = await createClienteUseCase.execute({ name, rg, cpf, birthDate, email });

            return response.status(200).json(cliente);
        } catch (e) {
            return response.status(400).json({ error: e.message });
        }
    }
}

export { CreateClienteController };