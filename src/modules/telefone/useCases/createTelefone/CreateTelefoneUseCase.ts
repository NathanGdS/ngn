import { ICreateTelefoneDTO } from "@modules/telefone/dtos/ICreateTelefoneDTO";
import { Telefone } from "@modules/telefone/infra/typeorm/entities/Telefone";
import { ITelefoneRepository } from "@modules/telefone/repositories/ITelefoneRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateTelefoneUseCase {
        constructor(
        @inject("TelefoneRepository")
        private telefoneRepository: ITelefoneRepository
    ) { }
    
    async execute({ telNumber, customerId, userId }: ICreateTelefoneDTO): Promise<Telefone> {
        const telefoneExists = await this.telefoneRepository.findByTelNumber(telNumber);

        if (telefoneExists) throw new AppError('Telefone already exists!');

        const telefone = await this.telefoneRepository.create({ telNumber, customerId, userId });

        return telefone;
    }
}

export { CreateTelefoneUseCase };