import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListOrdemServicoUseCase } from "./ListOrdemServicoUseCase";

class ListOrdemServicoController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const listOrdemServicoUseCase = container.resolve(
                ListOrdemServicoUseCase
            );

            const ordemServico = await listOrdemServicoUseCase.execute();

            return response.status(200).json(ordemServico);
        } catch (e) {
            return response.status(400).json({ error: e.message });
        }
    }
}

export { ListOrdemServicoController };