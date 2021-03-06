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

    async findByRenavam(renavam: number): Promise<Automovel> {
        return this.automoveis.find(automovel => automovel.renavam === renavam);
    }

    async findByCustomer(customerId: string): Promise<Automovel[]> {
        return this.automoveis.filter(automoveis => automoveis.customerId === customerId);
    } 

    async findByType(typeId: string): Promise<Automovel[]> {
        return this.automoveis.filter(automoveis => automoveis.typeId === typeId);    
    }

    async update(id: string, data: IUpdateAutomovelDTO): Promise<Automovel> {
        const findIndex = this.automoveis.findIndex(automovel => automovel.id === id);
        this.automoveis[findIndex].plate = data.plate;
        this.automoveis[findIndex].model = data.model;
        this.automoveis[findIndex].brand = data.brand;
        this.automoveis[findIndex].color = data.color;
        this.automoveis[findIndex].year = data.year;
        this.automoveis[findIndex].renavam = data.renavam;
        this.automoveis[findIndex].typeId = data.typeId;

        return this.automoveis[findIndex];
    }

    delete(id: string): void {
        const findIndex = this.automoveis.findIndex(automovel => automovel.id === id);
        this.automoveis.splice(findIndex, 1)
    }

}

export { AutomovelRepositoryInMemory };