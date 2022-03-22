import { Endereco } from "@modules/endereco/infra/typeorm/entities/Endereco";
import { IEnderecoRepository } from "@modules/endereco/repositories/IEnderecoRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListEnderecoUseCase {
    constructor(
        @inject("EnderecoRepository")
        private enderecoRepository: IEnderecoRepository
    ) { }

    async execute(): Promise<Endereco[]> {
        return this.enderecoRepository.findAll()
    }
   
}

export { ListEnderecoUseCase };