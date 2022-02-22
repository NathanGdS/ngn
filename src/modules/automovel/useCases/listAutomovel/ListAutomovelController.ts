import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAutomovelUseCase } from "./ListAutomovelUseCase";

class ListAutomovelController {
    async handle(request: Request, response: Response): Promise<Response> {
        try{
            const listAutomovelUseCase = container.resolve(
                ListAutomovelUseCase
            );

            const automoveis = await listAutomovelUseCase.execute();

            return response.status(200).json(automoveis);
        } catch (e) {
            return response.status(400).json({ error: e.message });
        }
    }
}

export { ListAutomovelController };