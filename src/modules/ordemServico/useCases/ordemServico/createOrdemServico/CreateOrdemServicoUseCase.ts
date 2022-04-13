import { ICreateOrdemServicoDTO } from "@modules/ordemServico/dtos/ICreateOrdemServicoDTO";
import { OrdemServico } from "@modules/ordemServico/infra/typeorm/entities/OrdemServico";
import { IOrdemServicoRepository } from "@modules/ordemServico/repositories/IOrdemServicoRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateOrdemServicoUseCase {
    constructor(
        @inject("OrdemServicoRepository")
        private ordemServicoRepository: IOrdemServicoRepository
    ) { }

    async execute({
        automovelId,
        descricao,
        statusId,
        valorTotal
    }: ICreateOrdemServicoDTO): Promise<OrdemServico> {
        return await this.ordemServicoRepository.create({
            automovelId,
            descricao,
            statusId,
            valorTotal
        });
    }

}

export { CreateOrdemServicoUseCase };