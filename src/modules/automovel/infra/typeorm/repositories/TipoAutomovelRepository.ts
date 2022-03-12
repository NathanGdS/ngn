import { getRepository, Repository } from "typeorm";

import { ICreateTipoAutomovelDTO } from "@modules/automovel/dtos/ICreateTipoAutomovelDTO";
import { ITipoAutomovelRepository } from "@modules/automovel/repositories/ITipoAutomovelRepository";

import { TipoAutomovel } from "../entities/TipoAutomovel";

class TipoAutomovelRepository implements ITipoAutomovelRepository {
    private repository: Repository<TipoAutomovel>;

    constructor() {
        this.repository = getRepository(TipoAutomovel);
    }

    async create({
        description
    }: ICreateTipoAutomovelDTO): Promise<TipoAutomovel> {
        const tipoAutomovel = this.repository.create({
            description
        });

        await this.repository.save(tipoAutomovel);

        return tipoAutomovel;
    }

    async findAll(): Promise<TipoAutomovel[]> {
        const tipoAutomoveis = await this.repository.find();
        return tipoAutomoveis;
    }

    async findByDescription(description: string): Promise<TipoAutomovel> {
        return this.repository.findOne({description});
    }

    async findById(id: string): Promise<TipoAutomovel> {
        return this.repository.findOne({id});
    }

    async update(id: string, description: string): Promise<TipoAutomovel> {
        await this.repository
            .createQueryBuilder()
            .update()
            .set({
                description
            })
            .where("id = :id")
            .setParameters({id})
            .execute();
        return this.repository.findOne({id});
    }

    delete(id: string): void {
        this.repository.delete({id});
    }
}

export { TipoAutomovelRepository };