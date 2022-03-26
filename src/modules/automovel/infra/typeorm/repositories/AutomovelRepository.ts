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
        plate,
        model,
        brand,
        color,
        year,
        renavam,
        typeId,
        customerId
    }: ICreateAutomovelDTO): Promise<Automovel> {
        const automovel = this.repository.create({
            plate,
            model,
            brand,
            color,
            year,
            renavam,
            typeId,
            customerId
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

    async findByRenavam(renavam: number): Promise<Automovel> {
        return this.repository.findOne({ renavam });
    }
}

export { AutomovelRepository };