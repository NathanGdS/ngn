import { ICreateOrdemServicoDTO } from "@modules/ordemServico/dtos/ICreateOrdemServicoDTO";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateOrdemServicoUseCase } from "./CreateOrdemServicoUseCase";

class CreateOrdemServicoController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {

            const { automovelId, descricao }:ICreateOrdemServicoDTO = request.body;

            const createOrdemServicoUseCase = container.resolve(
                CreateOrdemServicoUseCase
            );

            const ordemServico = await createOrdemServicoUseCase.execute({
                automovelId,
                descricao,
            });

            return response.status(201).json(ordemServico);
        } catch (e) {
            return response.status(400).json({ error: e.message });
        }
    }
}

export { CreateOrdemServicoController };