import { NextFunction, Request, Response, Router } from "express";
import { container } from "tsyringe";

import { ListTipoAutomovelUseCase } from "./ListTipoAutomovelUseCase";

class ListTipoAutomovelController {
    async handle(request: Request, response: Response, next: NextFunction): Promise<Response> {
        try{

            const listTipoAutomovelUseCase = container.resolve(
                ListTipoAutomovelUseCase
            );

            const tipoAutomoveis = await listTipoAutomovelUseCase.execute();

            return response.status(200).json(tipoAutomoveis);
        } catch (e) {
            return response.status(400).json({ error: e.message });
        }
    }
}

export { ListTipoAutomovelController };