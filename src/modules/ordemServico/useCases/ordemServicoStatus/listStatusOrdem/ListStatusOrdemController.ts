import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListStatusOrdemUseCase } from "./ListStatusOrdemUseCase";

class ListStatusOrdemController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const listStatusOrdemUseCase = container.resolve(
                ListStatusOrdemUseCase
            );

            const statusOrdem = await listStatusOrdemUseCase.execute();

            return response.status(200).json(statusOrdem);
        } catch (e) {
            return response.status(400).json({ error: e.message });
        }
    }
}

export { ListStatusOrdemController };