import { StatusOrdem } from "@modules/ordemServico/infra/typeorm/entities/StatusOrdem";
import { IStatusOrdemRepository } from "../IStatusOrdemRepository";

class StatusOrdemRepositoryInMemory implements IStatusOrdemRepository {
    statusOrdem: StatusOrdem[] = [];

    async findAll(): Promise<StatusOrdem[]> {
        return this.statusOrdem;
    }

    async findByNumber(number: number): Promise<StatusOrdem> {
        return this.statusOrdem.find(status => status.statusNumber === number);
    }
    
    async findById(id: string): Promise<StatusOrdem> {
        return this.statusOrdem.find(status => status.id === id);
    }

    async findByDescription(description: string): Promise<StatusOrdem> {
        return this.statusOrdem.find(status => status.description === description);
    }
}

export { StatusOrdemRepositoryInMemory };