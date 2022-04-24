import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUsuarioUseCase } from "./CreateUsuarioUseCase";


class CreateUsuarioController {
    async handle(request: Request, response: Response): Promise<Response> {
        try{

            const { cpf, email, name, password } = request.body;

            const createUsuario = container.resolve(
                CreateUsuarioUseCase
            );

            const usuario = await createUsuario.execute({ cpf, email, name, password });

            return response.status(201).json(usuario);

        } catch (e) {
            return response.status(400).json({ error: e.message });
        }
    }
}

export { CreateUsuarioController };
