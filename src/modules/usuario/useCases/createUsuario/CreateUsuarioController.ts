import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUsuarioUseCase } from "./CreateUsuarioUseCase";

class CreateUsuarioController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { name, password, rg, cpf, birthDate, email } = request.body;

            const createUsuarioUseCase = container.resolve(
                CreateUsuarioUseCase
            );

            const usuario = await createUsuarioUseCase.execute({ name, password, rg, cpf, birthDate, email });

            return response.status(200).json(usuario);
        } catch (e) {
            return response.status(400).json({ error: e.message });
        }
    }
}

export { CreateUsuarioController };