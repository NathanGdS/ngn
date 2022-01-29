import { ICreateAutomovelDTO } from "@modules/automovel/dtos/ICreateAutomovelDTO";
import { Automovel } from "@modules/automovel/infra/typeorm/entities/Automovel";
import { Cliente } from "@modules/cliente/infra/typeorm/entities/Cliente";

interface IAutomovelRepository {
    create(data: ICreateAutomovelDTO): Promise<Automovel>;
    findAll(): Promise<Automovel[]>;
    findByClient(customerId: Cliente): Promise<Automovel>;
    findById(id: string): Promise<Automovel>;
}

export { IAutomovelRepository };