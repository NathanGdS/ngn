import { IUpdateAutomovelDTO } from "@modules/automovel/dtos/IUpdateAutomovelDTO";
import { Automovel } from "@modules/automovel/infra/typeorm/entities/Automovel";
import { IAutomovelRepository } from "../IAutomovelRepository";

class AutomovelRepositoryInMemory implements IAutomovelRepository {
    automoveis: Automovel[] = [];
    
    async create(
        { plate, model, brand, color, year, renavam, customerId, typeId}
    ): Promise<Automovel> { 
        const automovel = new Automovel();

        Object.assign(automovel, { plate, model, brand, color, year, renavam, customerId, typeId});

        this.automoveis.push(automovel);

        return automovel;
    }

    async findAll(): Promise<Automovel[]> {
        return this.automoveis;
    }

    async findById(id: string): Promise<Automovel> {
        return this.automoveis.find((automovel) => automovel.id === id);
    }

    async update({ id, plate, model, brand, color, year, renavam, typeId }: IUpdateAutomovelDTO): Promise<Automovel> {
        const automovel = await this.findById(id);

        Object.assign(automovel, {
            plate,
            model,
            brand,
            color,
            year,
            renavam,
            typeId
        });

        this.automoveis.push(automovel);

        return automovel;
    }

    async delete(id: string): Promise<void> {
        const automovelIndex = this.automoveis.findIndex((automovel) => automovel.id === id);

        this.automoveis.splice(automovelIndex, 1);
    }
}

export { AutomovelRepositoryInMemory };