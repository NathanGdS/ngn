import { ICreateTipoAutomovelDTO } from "../dtos/ICreateTipoAutomovelDTO";
import { IUpdateTipoAutomovelDTO } from "../dtos/IUpdateTipoAutomovelDTO";
import { TipoAutomovel } from "../infra/typeorm/entities/TipoAutomovel";

interface ITipoAutomovelRepository {
    create(data: ICreateTipoAutomovelDTO): Promise<TipoAutomovel>;
    findAll(): Promise<TipoAutomovel[]>;
    findByDescription(description: string): Promise<TipoAutomovel>;
    findById(id: string): Promise<TipoAutomovel>;
    update(data: IUpdateTipoAutomovelDTO): Promise<TipoAutomovel>;
    delete(id: string): Promise<void>;
}

export { ITipoAutomovelRepository };
