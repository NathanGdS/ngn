import { ICreateOrdemPecasDTO } from "../dtos/ICreateOrdemPecasDTO";
import { IUpdateOrdemPecaDTO } from "../dtos/IUpdateOrdemPecaDTO";
import { OrdemPecas } from "../infra/typeorm/entities/OrdemPecas";

interface IOrdemPecasRepository {
    findAll(): Promise<OrdemPecas[]>;
    findById(id: string): Promise<OrdemPecas>;
    findByOrdemServicoId(id: string): Promise<OrdemPecas[]>;
    create(data: ICreateOrdemPecasDTO): Promise<OrdemPecas>;
    update(id: string, data: IUpdateOrdemPecaDTO): Promise<OrdemPecas>;
    delete(id: string): void;
}

export { IOrdemPecasRepository };