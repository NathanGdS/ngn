import { ITelefoneRepository } from "@modules/telefone/repositories/ITelefoneRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteTelefoneUseCase {
    constructor(
        @inject("TelefoneRepository")
        private telefoneRepository: ITelefoneRepository
    ) { }
    
    async execute(id: string): Promise<void> {
        this.telefoneRepository.delete(id);
    }
}

export { DeleteTelefoneUseCase };