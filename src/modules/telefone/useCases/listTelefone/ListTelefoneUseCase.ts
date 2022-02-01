import { Telefone } from "@modules/telefone/infra/typeorm/entities/Telefone";
import { ITelefoneRepository } from "@modules/telefone/repositories/ITelefoneRepository";
import { AppError } from "@shared/errors/AppError";

class ListTelefoneUseCase {
    constructor(
        private telefoneRepository: ITelefoneRepository
    ) { }
    
    async execute(): Promise<Telefone[]> {
        const telefones = await this.telefoneRepository.findAll();

        if (!telefones) throw new AppError('No Telefones found!');
        
        return telefones;
    }
}

export { ListTelefoneUseCase };