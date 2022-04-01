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
        if (!userExists) throw new AppError('Usuário não existe!')
        const passMatch = await compare(currentPassword, userExists.password)
        
        if (!passMatch) {
            throw new AppError('Senha Atual incorreta!')
        } else {
            if (newPassword === currentPassword) throw new AppError('Nova senha não pode ser a mesma que a senha atual!')
            const hash = hashSync(newPassword, 8);            
            this.usuarioRepository.changePassword({
                id,
                newPassword: hash
            })
        } 
    }
}

export { ChangePasswordUseCase };