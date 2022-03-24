import { StatusOrdem } from "@modules/ordemServico/infra/typeorm/entities/StatusOrdem";
import { IStatusOrdemRepository } from "@modules/ordemServico/repositories/IStatusOrdemRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListStatusOrdemUseCase {
    constructor(
        @inject("StatusOrdemRepository")
        private statusOrdemRepository: IStatusOrdemRepository
    ) { }

    async execute(): Promise<StatusOrdem[]> {
        const statusOrdem = await this.statusOrdemRepository.findAll();

        return statusOrdem;
    }

}

export { ListStatusOrdemUseCase };