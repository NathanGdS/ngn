import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateEnderecoUseCase } from "./CreateEnderecoUseCase";

class CreateEnderecoController {
    async handle(request: Request, response: Response): Promise<Response> {

        try {
            const { cep, street, number, supplement, district, town, uf, customerId, userId } = request.body;

            const createEnderecoUseCase = container.resolve(
                CreateEnderecoUseCase
            );

            const endereco = await createEnderecoUseCase.execute({
                cep,
                street,
                number,
                supplement,
                district,
                town,
                uf,
                customerId,
                userId
            });

            return response.status(201).json(endereco);
        } catch (e) {
            return response.status(400).json({ error: e.message });
        }
    }
}

export { CreateEnderecoController };