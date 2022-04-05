import { ICreateOrdemProcedimentosDTO } from "../dtos/ICreateOrdemProcedimentosDTO";
import { OrdemProcedimentos } from "../infra/typeorm/entities/OrdemProcedimentos";

interface IOrdemProcedimentosRepository {
    findAll(): Promise<OrdemProcedimentos[]>;
    // findById(id: string): Promise<StatusOrdem>;
    // findByDescription(description: string): Promise<StatusOrdem>;
    create(data: ICreateOrdemProcedimentosDTO): Promise<OrdemProcedimentos>;
}

export { IOrdemProcedimentosRepository };