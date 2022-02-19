import { ICreateTipoAutomovelDTO } from "@modules/automovel/dtos/ICreateTipoAutomovelDTO";
import { IUpdateTipoAutomovelDTO } from "@modules/automovel/dtos/IUpdateTipoAutomovelDTO";
import { TipoAutomovel } from "@modules/automovel/infra/typeorm/entities/TipoAutomovel";
import { ITipoAutomovelRepository } from "../ITipoAutomovelRepository";

class TipoAutomovelRepositoryInMemory implements ITipoAutomovelRepository {
    tipoAutomoveis: TipoAutomovel[] = [];

    async create({
        description,
    }: ICreateTipoAutomovelDTO): Promise<TipoAutomovel> {
        const tipoAutomovel = new TipoAutomovel();

        Object.assign(tipoAutomovel, {
            description
        });

        this.tipoAutomoveis.push(tipoAutomovel);
        return tipoAutomovel;
    }

    async findAll(): Promise<TipoAutomovel[]> {
        return this.tipoAutomoveis;
    }

    async findByDescription(description: string): Promise<TipoAutomovel> {
        return this.tipoAutomoveis.find( (tipoAutomovel) => tipoAutomovel.description === description);
    }

    async findById(id: string): Promise<TipoAutomovel> {
        return this.tipoAutomoveis.find((tipoAutomovel) => tipoAutomovel.id === id);
    }

    async update({id, description}: IUpdateTipoAutomovelDTO): Promise<TipoAutomovel> {
        const tipoAutomovel = await this.findById(id);

        Object.assign(tipoAutomovel, {
            description
        });

        this.tipoAutomoveis.push(tipoAutomovel);

        return tipoAutomovel;
    }

    async delete(id: string): Promise<void> {
        const tipoAutomovel = this.tipoAutomoveis.findIndex((tipoAutomovel) => tipoAutomovel.id === id);

        this.tipoAutomoveis.splice(tipoAutomovel, 1);
    }
}

export { TipoAutomovelRepositoryInMemory };
