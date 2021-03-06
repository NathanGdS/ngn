import { Request, Response } from "express";
import { container } from "tsyringe";
import { ChangePasswordUseCase } from "./ChangePasswordUseCase";

class ChangePasswordController {
    async handle(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const { new_password, new_password_confirmation } = request.body;
            
            const changePasswordUseCase = container.resolve(
                ChangePasswordUseCase
            )

            await changePasswordUseCase.execute({ id, new_password, new_password_confirmation })

            return response.status(200).send()
        } catch (e) {
            return response.status(400).json({ error: e.message })            
        }
    }
}

export { ChangePasswordController };