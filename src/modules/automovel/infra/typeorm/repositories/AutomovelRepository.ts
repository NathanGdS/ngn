import { getRepository, Repository } from "typeorm";

import { ICreateAutomovelDTO } from "@modules/automovel/dtos/ICreateAutomovelDTO";
import { IAutomovelRepository } from "@modules/automovel/repositories/IAutomovelRepository";

import { Automovel } from "../entities/Automovel";
import { IUpdateAutomovelDTO } from "@modules/automovel/dtos/IUpdateAutomovelDTO";

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
        return this.repository.findOne({renavam});
    }

    async findByCustomer(customerId: string): Promise<Automovel[]> {
        return this.repository.find({ customerId });   
    }

    async findByType(typeId: string): Promise<Automovel[]> {
        return this.repository.find({ typeId });
    }

    async update({
        id,
        plate,
        model,
        brand,
        color,
        year,
        renavam,
        typeId}: IUpdateAutomovelDTO): Promise<Automovel> {
        await this.repository
            .createQueryBuilder()
            .update()
            .set({
                plate,
                model,
                brand,
                color,
                year,
                renavam,
                typeId
            })
            .where("id = :id")
            .setParameters({ id })
            .execute()
        
        return this.repository.findOne({ id })
    }

    delete(id: string): void {
        this.repository.delete({ id })
    }
}

export { AutomovelRepository };