import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateEnderecoUseCase } from "./UpdateEnderecoUseCase";

class UpdateEnderecoController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const { cep, street, number, supplement, district, town, uf } = request.body

            const updateEnderecoUseCase = container.resolve(
                UpdateEnderecoUseCase
            )

            const endereco = await updateEnderecoUseCase.execute({ id, cep, number, street, supplement, district, town, uf });

            return response.status(200).json(endereco);
        } catch (e) {
            return response.status(400).json({ error: e.message });
        }
    }
}

export { UpdateEnderecoController };