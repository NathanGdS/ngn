import { Telefone } from "@modules/telefone/infra/typeorm/entities/Telefone";
import { ITelefoneRepository } from "@modules/telefone/repositories/ITelefoneRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListTelefoneUseCase {
    constructor(
        @inject("TelefoneRepository")
        private telefoneRepository: ITelefoneRepository
    ) {}
    
    async execute(): Promise<Telefone[]> {
        const telefones = await this.telefoneRepository.findAll()

        return telefones;
    }
}

export { ListTelefoneUseCase };