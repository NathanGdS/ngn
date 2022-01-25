import { ICreateStatusOrdemDTO } from "@modules/ordemServico/dtos/ICreateStatusOrdemDTO";
import { StatusOrdem } from "@modules/ordemServico/infra/typeorm/entities/StatusOrdem";
import { IStatusOrdemRepository } from "../IStatusOrdemRepository";

class StatusOrdemRepositoryInMemory implements IStatusOrdemRepository {
    statusOrdem: StatusOrdem[] = [];

    async create({ description, number,
    }: ICreateStatusOrdemDTO): Promise<StatusOrdem> {
        const statusOrdem = new StatusOrdem();

        Object.assign(statusOrdem, {
            description,
            number,
        });

        this.statusOrdem.push(statusOrdem);
        return statusOrdem;
    }

    async findByDescription(description: string): Promise<StatusOrdem> {
        return this.statusOrdem.find( (statusOrdem) => statusOrdem.description === description);
    }

    async findByNumber(number: number): Promise<StatusOrdem> {
        return this.statusOrdem.find((statusOrdem) => statusOrdem.number === number);
    }

    async findAll(): Promise<StatusOrdem[]> {
        return this.statusOrdem;
    }
}

export { StatusOrdemRepositoryInMemory };