import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateOrdemProcedimentoUseCase } from "./UpdateOrdemProcedimentoUseCase";


class UpdateOrdemProcedimentoController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            const data = request.body;

            const updateOrdemProcedimentoUseCase = container.resolve(
                UpdateOrdemProcedimentoUseCase
            );

            const ordemProcedimento = await updateOrdemProcedimentoUseCase.execute(id, data);

            return response.status(200).json(ordemProcedimento);
        } catch (e) {
            return response.status(400).json({ error: e.message });
        }
    }
}

export { UpdateOrdemProcedimentoController }