import { ICreateOrdemProcedimentosDTO } from "../dtos/ICreateOrdemProcedimentosDTO";
import { IUpdateOrdemProcedimentoDTO } from "../dtos/IUpdateOrdemProcedimentoDTO";
import { OrdemProcedimentos } from "../infra/typeorm/entities/OrdemProcedimentos";

interface IOrdemProcedimentosRepository {
    findAll(): Promise<OrdemProcedimentos[]>;
    findById(id: string): Promise<OrdemProcedimentos>;
    findByOrdemServicoId(id: string): Promise<OrdemProcedimentos[]>;
    create(data: ICreateOrdemProcedimentosDTO): Promise<OrdemProcedimentos>;
    update(id:string, data: IUpdateOrdemProcedimentoDTO): Promise<OrdemProcedimentos>;
    delete(id: string): void;
}

export { IOrdemProcedimentosRepository };