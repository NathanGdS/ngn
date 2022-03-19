import { Telefone } from "@modules/telefone/infra/typeorm/entities/Telefone";
import { ITelefoneRepository } from "@modules/telefone/repositories/ITelefoneRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class UpdateTelefoneUseCase {
    constructor(
        @inject("TelefoneRepository")
        private telefoneRepository: ITelefoneRepository
    ) { }
    
    async execute({number, id}): Promise<Telefone> {
        const telefoneExists = await this.telefoneRepository.findById(id);

        if (!telefoneExists) throw new AppError('Telefone não existe!')

        const telefone = await this.telefoneRepository.update(number, id);

        return telefone;
    }
}

export { UpdateTelefoneUseCase };