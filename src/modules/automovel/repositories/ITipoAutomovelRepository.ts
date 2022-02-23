import { ICreateTipoAutomovelDTO } from "../dtos/ICreateTipoAutomovelDTO";
import { TipoAutomovel } from "../infra/typeorm/entities/TipoAutomovel";

interface ITipoAutomovelRepository {
    create(data: ICreateTipoAutomovelDTO): Promise<TipoAutomovel>;
    findAll(): Promise<TipoAutomovel[]>;
    findByDescription(description: string): Promise<TipoAutomovel>;
    findById(id: string): Promise<TipoAutomovel>;
    update(id: string, description: string): Promise<TipoAutomovel>;
    delete(id: string): void;
}

export { ITipoAutomovelRepository };
