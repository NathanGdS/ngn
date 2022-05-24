import { StatusOrdem } from "@modules/ordemServico/infra/typeorm/entities/StatusOrdem";
import { IStatusOrdemRepository } from "@modules/ordemServico/repositories/IStatusOrdemRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateStatusOrdemUseCase {
    constructor(
        @inject("StatusOrdemRepository")
        private statusOrdemRepository: IStatusOrdemRepository
    ) { }

    async execute(description: string): Promise<StatusOrdem> {
        const statusOrdem = await this.statusOrdemRepository.create(description);

        return statusOrdem;
    }

}

export { CreateStatusOrdemUseCase };