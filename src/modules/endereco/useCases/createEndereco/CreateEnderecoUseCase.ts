import { ICreateEnderecoDTO } from "@modules/endereco/dtos/ICreateEnderecoDTO";
import { Endereco } from "@modules/endereco/infra/typeorm/entities/Endereco";
import { IEnderecoRepository } from "@modules/endereco/repositories/IEnderecoRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateEnderecoUseCase {
    constructor(
        @inject("EnderecoRepository")
        private enderecoRepository: IEnderecoRepository
    ) { }
    
    async execute({
        addCep,
        addStreet,
        addNumber,
        addSupplement,
        addDistrict,
        addTown,
        addFU,
        userId,
        customerId }: ICreateEnderecoDTO): Promise<Endereco> {
        const customerEnd = await this.enderecoRepository.findByCustomer(customerId);
        const userEnd = await this.enderecoRepository.findByUser(userId);

        if (customerEnd || userEnd) throw new AppError('Endereco already exists!');

        const endereco = await this.enderecoRepository.create({
            addCep,
            addStreet,
            addNumber,
            addSupplement,
            addDistrict,
            addTown,
            addFU,
            userId,
            customerId
        });

        return endereco;
    }
}

export { CreateEnderecoUseCase };