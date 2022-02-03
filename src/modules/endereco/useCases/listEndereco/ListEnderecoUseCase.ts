import { Endereco } from "@modules/endereco/infra/typeorm/entities/Endereco";
import { IEnderecoRepository } from "@modules/endereco/repositories/IEnderecoRepository";
import { AppError } from "@shared/errors/AppError";

class ListEnderecoUseCase {
    constructor(
        private enderecoRepository: IEnderecoRepository
    ) { }
    
    async execute(): Promise<Endereco[]> {
        const enderecos = await this.enderecoRepository.findAll();

        if (!enderecos) throw new AppError('No Enderecos found!');

        return enderecos;
    }
}

export { ListEnderecoUseCase };