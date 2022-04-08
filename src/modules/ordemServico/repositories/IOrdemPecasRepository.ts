import { ICreateOrdemPecasDTO } from "../dtos/ICreateOrdemPecasDTO";
// import { IUpdateOrdemPecaDTO } from "../dtos/IUpdateOrdemPecaDTO";
import { OrdemPecas } from "../infra/typeorm/entities/OrdemPecas";

interface IOrdemPecasRepository {
    create(data: ICreateOrdemPecasDTO): Promise<OrdemPecas>;
    findAll(): Promise<OrdemPecas[]>;
    // update(id: string, data: IUpdateOrdemPecaDTO): Promise<OrdemPecas>;
    delete(id: string): void;
    
}

export { IOrdemPecasRepository };