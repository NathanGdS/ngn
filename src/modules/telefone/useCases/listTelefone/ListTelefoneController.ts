import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListTelefoneUseCase } from "./ListTelefoneUseCase";

class ListTelefoneController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const lisTelefoneUseCase = container.resolve(
                ListTelefoneUseCase
            );

            const telefones = await lisTelefoneUseCase.execute();

            return response.status(200).json(telefones);
        } catch (e) {
            return response.status(400).json({ error: e.message });
        }
    }
}

export { ListTelefoneController };