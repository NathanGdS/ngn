import { ICreateOrdemPecasDTO } from "@modules/ordemServico/dtos/ICreateOrdemPecasDTO";
import { OrdemPecas } from "@modules/ordemServico/infra/typeorm/entities/OrdemPecas";
import { IOrdemPecasRepository } from "@modules/ordemServico/repositories/IOrdemPecasRepository";
import { IOrdemServicoRepository } from "@modules/ordemServico/repositories/IOrdemServicoRepository";
import { IStatusOrdemRepository } from "@modules/ordemServico/repositories/IStatusOrdemRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateOrdemPecaUseCase {
    constructor(
        @inject("OrdemPecasRepository")
        private ordemPecasRepository: IOrdemPecasRepository,
        @inject("OrdemServicoRepository")
        private ordemServicoRepository: IOrdemServicoRepository,
        @inject("StatusOrdemRepository")
        private statusOrdemRepository: IStatusOrdemRepository,
    ) { }

    async execute({        
        description,
        unit_value,
        amount,
        ordemServicoId
    }: ICreateOrdemPecasDTO): Promise<OrdemPecas> {
        const found = await this.ordemServicoRepository.findById(ordemServicoId)
        const verifyOrdemStatus = (await this.statusOrdemRepository.findById(found.statusId)).statusNumber
        
        if (verifyOrdemStatus !== 1 && verifyOrdemStatus !== 6) throw new AppError("Peça não pode ser criada!", 400)

        const ordemPeca = await this.ordemPecasRepository.create({
            description,
            unit_value,
            amount,
            ordemServicoId
        })

        await this.ordemServicoRepository.recalculateTotal(ordemServicoId)

        return ordemPeca
    }
}

export { CreateOrdemPecaUseCase };