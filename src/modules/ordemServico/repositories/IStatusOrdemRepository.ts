import { ICreateStatusOrdemDTO } from "../dtos/ICreateStatusOrdemDTO";
import { StatusOrdem } from "../infra/typeorm/entities/StatusOrdem";

interface IStatusOrdemRepository {
    create(data: ICreateStatusOrdemDTO): Promise<StatusOrdem>;
    findByDescription(description: string): Promise<StatusOrdem>;
    findByNumber(number: number): Promise<StatusOrdem>;
}

export { IStatusOrdemRepository };