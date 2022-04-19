import { ICreateOrdemPecasDTO } from "@modules/ordemServico/dtos/ICreateOrdemPecasDTO";
import { OrdemPecas } from "@modules/ordemServico/infra/typeorm/entities/OrdemPecas";
import { IOrdemPecasRepository } from "@modules/ordemServico/repositories/IOrdemPecasRepository";
import { IOrdemServicoRepository } from "@modules/ordemServico/repositories/IOrdemServicoRepository";
import { IStatusOrdemRepository } from "@modules/ordemServico/repositories/IStatusOrdemRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateOrdemPecaUseCase {
    constructor(
        @inject("OrdemPecasRepository")
        private ordemPecasRepository: IOrdemPecasRepository,
        @inject("OrdemServicoRepository")
        private ordemServicoRepository: IOrdemServicoRepository,
        @inject("StatusOrdemRepository")
        private statusOrdemRepository: IStatusOrdemRepository
    ) { }

    async execute({        
        description,
        unit_value,
        amount,
        ordemServicoId
    }: ICreateOrdemPecasDTO): Promise<OrdemPecas> {
        const found = await this.ordemServicoRepository.findById(ordemServicoId)
        const verifyOrdemStatus = await this.statusOrdemRepository.findById(found.statusId)
        
        if (verifyOrdemStatus.statusNumber !== (1 || 6)) throw new Error("Peça não pode ser criada!")

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