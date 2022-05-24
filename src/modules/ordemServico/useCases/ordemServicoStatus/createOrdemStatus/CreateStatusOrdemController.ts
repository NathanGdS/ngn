import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateStatusOrdemUseCase } from "./CreateStatusOrdemUseCase";

class CreateStatusOrdemController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const {description} = request.body;
            const createtStatusOrdemUseCase = container.resolve(
                CreateStatusOrdemUseCase
            );

            const statusOrdem = await createtStatusOrdemUseCase.execute(description);

            return response.status(201).json(statusOrdem);
        } catch (e) {
            return response.status(400).json({ error: e.message });
        }
    }
}

export { CreateStatusOrdemController };