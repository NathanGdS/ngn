import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateAutomovelUseCase } from "./CreateAutomovelUseCase";

class CreateAutomovelController {
    async handle(request: Request, response: Response): Promise<Response> {
        try{
            const { plate, model, brand, color, year, renavam, typeId, customerId } = request.body;

            const createAutomovelUseCase = container.resolve(
                CreateAutomovelUseCase
            );

            const automovel = await createAutomovelUseCase.execute({ plate, model, brand, color, year, renavam, typeId, customerId });

            return response.status(201).json(automovel);
            // return response.status(200).json({message: "automovel controller"});
        } catch (e) {
            return response.status(400).json({ error: e.message });
        }
    }
}

export { CreateAutomovelController };