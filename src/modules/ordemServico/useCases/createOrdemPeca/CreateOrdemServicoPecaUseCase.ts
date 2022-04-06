import { ICreateOrdemPecasDTO } from "@modules/ordemServico/dtos/ICreateOrdemPecasDTO";
import { OrdemPecas } from "@modules/ordemServico/infra/typeorm/entities/OrdemPecas";
import { IOrdemPecasRepository } from "@modules/ordemServico/repositories/IOrdemPecasRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateOrdemPecaUseCase {
    constructor(
        @inject("OrdemPecasRepository")
        private ordemPecasRepository: IOrdemPecasRepository
    ) { }

    async execute({
        sequence,
        description,
        unit_value,
        amount,
        total_value
    }: ICreateOrdemPecasDTO): Promise<OrdemPecas> {
        const ordemPeca = await this.ordemPecasRepository.create({
            sequence,
            description,
            unit_value,
            amount,
            total_value
        })

        return ordemPeca
    }
    
}

export { CreateOrdemPecaUseCase };