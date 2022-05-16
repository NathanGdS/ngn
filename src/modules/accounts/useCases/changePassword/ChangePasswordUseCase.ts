import { IChangePassword } from "@modules/accounts/interfaces/changepassword.interface";
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
    
    async execute({ id, new_password, new_password_confirmation }: IChangePassword): Promise<void>{
        const userExists = await this.usuarioRepository.findById(id)
        if (!userExists) throw new AppError('Usuário não existe!')
        
        if (!(new_password === new_password_confirmation)) {
            throw new AppError('Senhas divergentes!', 400)
        } else {
            const hash = hashSync(new_password, 8);            
            this.usuarioRepository.changePassword(
                id,
                hash
            )
        } 
    }
}

export { ChangePasswordUseCase };