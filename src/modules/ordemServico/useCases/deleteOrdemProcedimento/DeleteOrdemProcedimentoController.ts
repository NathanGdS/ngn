import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteOrdemProcedimentoUseCase } from "./DeleteOrdemProcedimentoUseCase";

class DeleteOrdemProcedimentoController {

   async handle(request: Request, response: Response): Promise<Response> {
       try {
        const { id } = request.params;

        const deleteOrdemProcedimentoUseCase = container.resolve(
            DeleteOrdemProcedimentoUseCase
        );

        deleteOrdemProcedimentoUseCase.execute(id);

        return response.status(200).send();
       } catch (e) {
        return response.status(400).json({ error: e.message });
       }
   } 

}

export { DeleteOrdemProcedimentoController };
