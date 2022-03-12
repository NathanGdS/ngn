import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUsuariosUseCase } from "./ListUsuariosUseCase";


class ListUsuariosController {
    async handle(request: Request, response: Response): Promise<Response> {
        try{

            const listUsuarios = container.resolve(
                ListUsuariosUseCase
            );

            const usuarios = await listUsuarios.execute();

            return response.status(200).json(usuarios);

        } catch(e) {
            return response.status(500).json({ error: e.message });
        }
    }
}

export { ListUsuariosController };
