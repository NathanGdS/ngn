import { ICreateTipoAutomovelDTO } from "../dtos/ICreateTipoAutomovelDTO";
import { TipoAutomovel } from "../infra/typeorm/entities/TipoAutomovel";

interface ITipoAutomovelRepository {
    create(data: ICreateTipoAutomovelDTO): Promise<TipoAutomovel>;
    findAll(): Promise<TipoAutomovel[]>;
    findByDescription(description: string): Promise<TipoAutomovel>;
}

export { ITipoAutomovelRepository };
