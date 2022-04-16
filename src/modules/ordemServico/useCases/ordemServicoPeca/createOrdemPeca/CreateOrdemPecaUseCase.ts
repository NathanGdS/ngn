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
        description,
        unit_value,
        amount,
        ordemServicoId
    }: ICreateOrdemPecasDTO): Promise<OrdemPecas> {
        const ordemPeca = await this.ordemPecasRepository.create({
            description,
            unit_value,
            amount,
            ordemServicoId
        })

        return ordemPeca
    }
}

export { CreateOrdemPecaUseCase };