import { ICreateTipoAutomovelDTO } from "@modules/automovel/dtos/ICreateTipoAutomovelDTO";
import { TipoAutomovel } from "@modules/automovel/infra/typeorm/entities/TipoAutomovel";
import { ITipoAutomovelRepository } from "../ITipoAutomovelRepository";

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

    async findAll(): Promise<TipoAutomovel[]> {
        return this.tipoAutomoveis;
    }

    async findByDescription(description: string): Promise<TipoAutomovel> {
        return this.tipoAutomoveis.find( (tipoAutomovel) => tipoAutomovel.description === description);
    }

    async findById(id: string): Promise<TipoAutomovel> {
        return this.tipoAutomoveis.find( (tipoAutomovel) => tipoAutomovel.id === id);
    }

    async update(id: string, description:string): Promise<TipoAutomovel> {
        const findIndex = this.tipoAutomoveis.findIndex(tipoAutomovel => tipoAutomovel.id === id);
        this.tipoAutomoveis[findIndex].description = description;
        return this.tipoAutomoveis[findIndex];
    }

    delete(id:string):void {
        const findIndex = this.tipoAutomoveis.findIndex(tipoAutomovel => tipoAutomovel.id === id);
        this.tipoAutomoveis.splice(findIndex, 1);
    }

}

export { TipoAutomovelRepositoryInMemory };
