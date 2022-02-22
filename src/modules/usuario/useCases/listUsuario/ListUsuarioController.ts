import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUsuarioUseCase } from "./ListUsuarioUseCase";

class ListUsuarioController {
    async handle(request: Request, response: Response): Promise<Response>  {
        try {
            const listUsuarioUseCase = container.resolve(
                ListUsuarioUseCase
            );

            const usuarios = await listUsuarioUseCase.execute();

            return response.status(200).json(usuarios);
        } catch (e) {
            return response.status(400).json({ error: e.message });
        }
    }
}

export { ListUsuarioController };