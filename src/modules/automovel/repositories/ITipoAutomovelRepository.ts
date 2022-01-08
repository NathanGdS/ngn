import { ICreateTipoAutomovelDTO } from "../dtos/ICreateTipoAutomovelDTO";
import { TipoAutomovel } from "../infra/typeorm/entities/TipoAutomovel";

interface ITipoAutomovelRepository {
    create(data: ICreateTipoAutomovelDTO): Promise<TipoAutomovel>;
}

export { ITipoAutomovelRepository };
