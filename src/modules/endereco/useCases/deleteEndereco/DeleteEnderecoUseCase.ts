import { IEnderecoRepository } from "@modules/endereco/repositories/IEnderecoRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteEnderecoUseCase {
    constructor(
        @inject("EnderecoRepository")
        private enderecoRepository: IEnderecoRepository
    ) { }
    
    async execute(id: string): Promise<void> {
        this.enderecoRepository.delete(id);
    }
}

export { DeleteEnderecoUseCase };