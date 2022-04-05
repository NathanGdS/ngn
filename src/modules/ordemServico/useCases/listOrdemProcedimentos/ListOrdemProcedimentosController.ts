import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListOrdemProcedimentosUseCase } from "./ListOrdemProcedimentosUseCase";

class ListOrdemProcedimentosController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const listOrdemProcedimentoUseCase = container.resolve(
                ListOrdemProcedimentosUseCase
            );

            const ordemProcedimento = await listOrdemProcedimentoUseCase.execute();

            return response.status(200).json(ordemProcedimento);
        } catch (e) {
            return response.status(400).json({ error: e.message });
        }
    }
}

export { ListOrdemProcedimentosController };