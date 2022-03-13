import { getRepository, Repository } from "typeorm";

import { ICreateAutomovelDTO } from "@modules/automovel/dtos/ICreateAutomovelDTO";
import { IAutomovelRepository } from "@modules/automovel/repositories/IAutomovelRepository";

import { Automovel } from "../entities/Automovel";

class AutomovelRepository implements IAutomovelRepository {
    private repository: Repository<Automovel>;

    constructor() {
        this.repository = getRepository(Automovel);
    }

    async create({
        brand,
        color,
        // customerId,
        model,
        plate,
        renavam,
        typeId,
        year
    }: ICreateAutomovelDTO): Promise<Automovel> {
        const automovel = this.repository.create({
            brand,
            color,
            model,
            plate,
            renavam,
            typeId,
            year
        });

        await this.repository.save(automovel);

        return automovel;

    }

    async findAll(): Promise<Automovel[]> {
        return this.repository.find();
    }

    async findById(id: string): Promise<Automovel> {
        return this.repository.findOne({id});
    }

  
}

export { AutomovelRepository };