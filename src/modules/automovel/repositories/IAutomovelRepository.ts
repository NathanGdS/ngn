import { ICreateAutomovelDTO } from "@modules/automovel/dtos/ICreateAutomovelDTO";
import { Automovel } from "@modules/automovel/infra/typeorm/entities/Automovel";

interface IAutomovelRepository {
    create(data: ICreateAutomovelDTO): Promise<Automovel>;
    findAll(): Promise<Automovel[]>;
    findById(id: string): Promise<Automovel>;
    findByRenavam(renavam: number): Promise<Automovel>;
}

export { IAutomovelRepository };