import { StatusOrdem } from "../infra/typeorm/entities/StatusOrdem";

interface IStatusOrdemRepository {
    findAll(): Promise<StatusOrdem[]>;
    findByNumber(number: number): Promise<StatusOrdem>;
    findById(id: string): Promise<StatusOrdem>;
    findByDescription(description: string): Promise<StatusOrdem>;
}

export { IStatusOrdemRepository };