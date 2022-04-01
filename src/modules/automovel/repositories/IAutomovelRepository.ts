import { ICreateAutomovelDTO } from "@modules/automovel/dtos/ICreateAutomovelDTO";
import { Automovel } from "@modules/automovel/infra/typeorm/entities/Automovel";
import { IUpdateAutomovelDTO } from "../dtos/IUpdateAutomovelDTO";

interface IAutomovelRepository {
    create(data: ICreateAutomovelDTO): Promise<Automovel>;
    findAll(): Promise<Automovel[]>;
    findById(id: string): Promise<Automovel>;
    findByRenavam(renavam: number): Promise<Automovel>;
    findByCustomer(customerId: string): Promise<Automovel[]>;
    findByType(typeId: string): Promise<Automovel[]>;
    update(id: string, data: IUpdateAutomovelDTO): Promise<Automovel>;
    delete(id: string): void;
}

export { IAutomovelRepository };