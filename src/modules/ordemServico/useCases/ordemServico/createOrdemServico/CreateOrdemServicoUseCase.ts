import { ICreateOrdemServicoDTO } from "@modules/ordemServico/dtos/ICreateOrdemServicoDTO";
import { OrdemServico } from "@modules/ordemServico/infra/typeorm/entities/OrdemServico";
import { IOrdemServicoRepository } from "@modules/ordemServico/repositories/IOrdemServicoRepository";
import { IStatusOrdemRepository } from "@modules/ordemServico/repositories/IStatusOrdemRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateOrdemServicoUseCase {
    constructor(
        @inject("OrdemServicoRepository")
        private ordemServicoRepository: IOrdemServicoRepository,
        @inject("OrdemServicoStatusRepository")
        private statusOrdemRepository: IStatusOrdemRepository
    ) { }

    async execute({
        automovelId,
        descricao,
        statusId,
        valorTotal
    }: ICreateOrdemServicoDTO): Promise<OrdemServico> {

        const anotherAutomovelOrdemExists = await this.ordemServicoRepository.findByAutomovelId(automovelId)

        if (anotherAutomovelOrdemExists.length > 0) {
            anotherAutomovelOrdemExists.forEach(async element => {
                const verifyOrdemStatus = await this.statusOrdemRepository.findById(element.statusId)
                if (verifyOrdemStatus.statusNumber !== (5 || 7)) {
                    throw new AppError("Ordem de Serviço para este automóvel não pode ser criada pois existe outra não Finalizada / Cancelada!")
                }
            });
        }

        return await this.ordemServicoRepository.create({
            automovelId,
            descricao,
            statusId,
            valorTotal
        });
    }

}

export { CreateOrdemServicoUseCase };