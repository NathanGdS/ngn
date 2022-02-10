import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateTipoAutomovelUseCase } from "./CreateTipoAutomovelUseCase";

class CreateTipoAutomovelController {
    async handle(request: Request, response: Response): Promise<Response> {
        try{
            const { description } = request.body;

            const createTipoAutomovelUseCase = container.resolve(
                CreateTipoAutomovelUseCase
            );

            const tipoAutomovel = await createTipoAutomovelUseCase.execute({ description });

            return response.status(201).json(tipoAutomovel);
        } catch (e) {
            return response.status(400).json({ error: e.message });
        }
    }
}

export { CreateTipoAutomovelController };