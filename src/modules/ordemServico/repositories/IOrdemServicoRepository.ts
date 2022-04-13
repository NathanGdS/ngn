import { ICreateOrdemServicoDTO } from "../dtos/ICreateOrdemServicoDTO";
import { OrdemServico } from "../infra/typeorm/entities/OrdemServico";

interface IOrdemServicoRepository {
    findAll(): Promise<OrdemServico[]>;
    findById(id: string): Promise<OrdemServico>;
    create(data: ICreateOrdemServicoDTO): Promise<OrdemServico>;
    // update(id: string, data: IUpdateOrdemPecaDTO): Promise<OrdemServico>;
    delete(id: string): void;
    
}

export { IOrdemServicoRepository };