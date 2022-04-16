import { OrdemServico } from "@modules/ordemServico/infra/typeorm/entities/OrdemServico";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListOneOrdemServicoUseCase } from "./ListOneOrdemServicoUseCase";


class ListOneOrdemServicoController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;

            const listOneOrdemServicoUseCase = container.resolve(
                ListOneOrdemServicoUseCase
            );

            const os: OrdemServico = await listOneOrdemServicoUseCase.execute(id);

            return response.status(200).json(os);

        } catch (e) {
            return response.status(e.statusCode).json({ error: e.message });
        }
    }


}

export { ListOneOrdemServicoController };