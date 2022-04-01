import { IUsuarioRepository } from "@modules/accounts/repositories/IUsuarioRepository";
import { AppError } from "@shared/errors/AppError";
import { compare, hashSync } from "bcryptjs";
import { inject, injectable } from "tsyringe";

@injectable()
class ChangePasswordUseCase {
    constructor(
        @inject("UsuarioRepository")
        private usuarioRepository: IUsuarioRepository
    ) { }
    
    async execute({ id, currentPassword, newPassword }): Promise<void>{
        const userExists = await this.usuarioRepository.findById(id)
        const passMatch = await compare(currentPassword, userExists.password)

        if (!userExists) {
            throw new AppError('Usuário não existe!')
        } else if(!passMatch) {
            throw new AppError('Senha Atual incorreta!')
        } else {
            const hash = hashSync(newPassword, 8);
            this.usuarioRepository.changePassword({
                id,
                newPassword: hash
            })
        } 
    }
}

export { ChangePasswordUseCase };