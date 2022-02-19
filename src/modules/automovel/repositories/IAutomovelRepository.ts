import { ICreateAutomovelDTO } from "@modules/automovel/dtos/ICreateAutomovelDTO";
import { Automovel } from "@modules/automovel/infra/typeorm/entities/Automovel";
import { IUpdateAutomovelDTO } from "../dtos/IUpdateAutomovelDTO";

interface IAutomovelRepository {
    create(data: ICreateAutomovelDTO): Promise<Automovel>;
    findAll(): Promise<Automovel[]>;
    findById(id: string): Promise<Automovel>;
    findByRenavam(renavam: number): Promise<Automovel>;
    update(data: IUpdateAutomovelDTO): Promise<Automovel>;
    delete(id: string): Promise<void>;
}

export { IAutomovelRepository };