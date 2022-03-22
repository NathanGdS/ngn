import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListEnderecoUseCase } from "./ListEnderecoUseCase";

class ListEnderecoController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const listEnderecoUseCase = container.resolve(
                ListEnderecoUseCase
            );

            const enderecos = await listEnderecoUseCase.execute();

            return response.status(200).json(enderecos);
        } catch (e) {
            return response.status(400).json({ error: e.message }); 
        }
    }
}

export { ListEnderecoController };