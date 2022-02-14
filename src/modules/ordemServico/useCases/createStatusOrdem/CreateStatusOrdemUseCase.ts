import { ICreateStatusOrdemDTO } from "@modules/ordemServico/dtos/ICreateStatusOrdemDTO";
import { StatusOrdem } from "@modules/ordemServico/infra/typeorm/entities/StatusOrdem";
import { IStatusOrdemRepository } from "@modules/ordemServico/repositories/IStatusOrdemRepository";
import { AppError } from "@shared/errors/AppError";

class CreateStatusOrdemUseCase {
    constructor(
        private statusOrdemRepository: IStatusOrdemRepository
    ) { }
    
    async execute({ description }: ICreateStatusOrdemDTO): Promise<StatusOrdem> {
        const statusOrdemExists = await this.statusOrdemRepository.findByDescription(description);

        if (statusOrdemExists) throw new AppError('Status Ordem already exists!');

        const statusOrdem = await this.statusOrdemRepository.create({ description });

        return statusOrdem;
    }
}

export { CreateStatusOrdemUseCase };