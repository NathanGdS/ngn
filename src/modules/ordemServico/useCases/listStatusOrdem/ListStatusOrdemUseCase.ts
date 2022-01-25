import { StatusOrdem } from "@modules/ordemServico/infra/typeorm/entities/StatusOrdem";
import { IStatusOrdemRepository } from "@modules/ordemServico/repositories/IStatusOrdemRepository";
import { AppError } from "@shared/errors/AppError";

class ListStatusOrdemUseCase {
    constructor(
        private statusOrdemRepository: IStatusOrdemRepository
    ) { }
    
    async execute(): Promise<StatusOrdem[]> {
        const statusOrdem = await this.statusOrdemRepository.findAll();

        if (!statusOrdem) throw new AppError('No Status Ordem found!');

        return statusOrdem;
    }
}

export { ListStatusOrdemUseCase };