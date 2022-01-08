import { ICreateTipoAutomovelDTO } from "@modules/automovel/dtos/ICreateTipoAutomovelDTO";
import { TipoAutomovel } from "@modules/automovel/infra/typeorm/entities/TipoAutomovel";
import { ITipoAutomovelRepository } from "../ITipoAutomovelRepository"

class TipoAutomovelRepositoryInMemory implements ITipoAutomovelRepository {
    tipoAutomoveis: TipoAutomovel[] = [];

    async create({
        description,
    }: ICreateTipoAutomovelDTO): Promise<TipoAutomovel> {
        const tipoAutomovel = new TipoAutomovel();

        Object.assign(tipoAutomovel, {
            description,
        });

        this.tipoAutomoveis.push(tipoAutomovel);
        return tipoAutomovel;
    }

}

export { TipoAutomovelRepositoryInMemory };
