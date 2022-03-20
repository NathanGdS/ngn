import { Endereco } from "@modules/endereco/infra/typeorm/entities/Endereco";
import { IEnderecoRepository } from "@modules/endereco/repositories/IEnderecoRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class UpdateEnderecoUseCase {
    constructor(
        @inject("EnderecoRepository")
        private enderecoRepository: IEnderecoRepository
    ) { }
    
    async execute({ id,
        cep,
        street,
        number,
        supplement,
        district,
        town,
        uf }): Promise<Endereco> {
        const enderecoExists = await this.enderecoRepository.findById(id);

        if (!enderecoExists) throw new AppError('Endereço não existe!');

        const endereco = await this.enderecoRepository.update({
            id,
            cep,
            street,
            number,
            supplement,
            district,
            town,
            uf
        });

        return endereco;
    }
}

export { UpdateEnderecoUseCase };