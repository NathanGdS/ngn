import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateEnderecoUseCase } from "./CreateEnderecoUseCase";

class CreateEnderecoController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { addCep, addStreet, addNumber, addSupplement, addDistrict, addTown, addFU, userId, customerId } = request.body;
            
            const createEnderecoUseCase = container.resolve(
                CreateEnderecoUseCase
            );

            const usuario = await createEnderecoUseCase.execute({
                addCep,
                addStreet,
                addNumber,
                addSupplement,
                addDistrict,
                addTown,
                addFU,
                userId,
                customerId
            });

            return response.status(200).json(usuario);
        } catch (e) {
            return response.status(400).json({ error: e.message });
        }
        
    }
}

export { CreateEnderecoController }; 