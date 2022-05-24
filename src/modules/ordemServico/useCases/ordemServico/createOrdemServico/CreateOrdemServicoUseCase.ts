import { ICreateOrdemServicoDTO } from "@modules/ordemServico/dtos/ICreateOrdemServicoDTO";
import { OrdemServico } from "@modules/ordemServico/infra/typeorm/entities/OrdemServico";
import { IOrdemServicoRepository } from "@modules/ordemServico/repositories/IOrdemServicoRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateOrdemServicoUseCase {
    constructor(
        @inject("OrdemServicoRepository")
        private ordemServicoRepository: IOrdemServicoRepository,
    ) { }

    async execute({
        automovelId,
        descricao,
        statusId,
        valorTotal
    }: ICreateOrdemServicoDTO): Promise<OrdemServico> {

        const anotherAutomovelOrdemExists = await this.ordemServicoRepository.findByAutomovelId(automovelId)

        if (anotherAutomovelOrdemExists.length > 0) {
            for (let index = 0; index < anotherAutomovelOrdemExists.length; index++) {
                const statusOrdemServico = anotherAutomovelOrdemExists[index].status.statusNumber;

                if (statusOrdemServico !== 5 && statusOrdemServico !== 7) 
                    throw new AppError("Ordem de Serviço para este automóvel não pode ser criada pois existe outra não Finalizada / Cancelada!", 400)
            }
        }

        return await this.ordemServicoRepository.create({
            automovelId,
            descricao,
            statusId,
            valorTotal
        })
    }
}

export { CreateOrdemServicoUseCase };