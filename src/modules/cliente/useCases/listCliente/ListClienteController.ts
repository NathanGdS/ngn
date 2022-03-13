import e, { Request, Response } from "express";
import { container } from "tsyringe";
import { ListClienteUseCase } from "./ListClienteUseCase";

class ListClienteController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const listClienteController = container.resolve(
                ListClienteUseCase
            );

            const clientes = await listClienteController.execute();

            return response.status(200).json(clientes);
        } catch (e) {
            return response.status(400).json({ error: e.message });
        }
    }
}

export { ListClienteController };
