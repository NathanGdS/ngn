import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateTipoAutomovelUseCase } from "./UpdateTipoAutomovelUseCase";

class UpdateTipoAutomovelController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            // const { id } = request.params;
            // const { description } = request.body; 
            
            // const updateTipoAutomovelUseCase = container.resolve(
            //     UpdateTipoAutomovelUseCase
            // );

            // const tipoAutomovel = await updateTipoAutomovelUseCase.execute({ id, description });

            return response.status(200).json({
                message: "aaa"
            });
        } catch (e) {
            return response.status(400).json({ error: e.message });
        }
    }
}

export { UpdateTipoAutomovelController };