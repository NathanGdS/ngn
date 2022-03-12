import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteTipoAutomovelUseCase } from "./DeleteTipoAutomovelUseCase";

class DeleteTipoAutomovelController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;

            const deleteTipoAutomovelUseCase = container.resolve(
                DeleteTipoAutomovelUseCase
            );

            await deleteTipoAutomovelUseCase.execute(id);

<<<<<<< HEAD
            return response.status(200).json({ message: "deleted" });
=======
            return response.status(200).send();
>>>>>>> 50eaee51e6bc49f8234973b175de015e3a9a4e47
        } catch (e) {
            return response.status(400).json({ error: e.message });
        }
    }
}

export { DeleteTipoAutomovelController };