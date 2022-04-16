import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindOneOrdemProcedimentoUseCase } from "./FindOneOrdemProcedimentoUseCase";

class FindOneOrdemProcedimentoController {

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;

            const findOneOrdemProcedimentoUseCase = container.resolve(
                FindOneOrdemProcedimentoUseCase
            );

            const ordemProcedimento = await findOneOrdemProcedimentoUseCase.execute(id);

            return response.status(200).json(ordemProcedimento);
        } catch (e) {
            return response.status(400).json({ error: e.message });
        }
    }

}

export { FindOneOrdemProcedimentoController };