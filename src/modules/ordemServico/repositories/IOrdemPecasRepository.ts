import { ICreateOrdemPecasDTO } from "../dtos/ICreateOrdemPecasDTO";
import { OrdemPecas } from "../infra/typeorm/entities/OrdemPecas";

interface IOrdemPecasRepository {
    create(data: ICreateOrdemPecasDTO): Promise<OrdemPecas>;
    findAll(): Promise<OrdemPecas[]>;
    
}

export { IOrdemPecasRepository };