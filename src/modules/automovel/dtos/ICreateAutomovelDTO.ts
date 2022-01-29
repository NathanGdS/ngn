import { Cliente } from "@modules/cliente/infra/typeorm/entities/Cliente";
import { TipoAutomovel } from "../infra/typeorm/entities/TipoAutomovel";

interface ICreateAutomovelDTO {
    autoPlate: string;
    autoModel: string;
    autoBrand: string;
    autoColor: string;
    autoYear: number;
    autoRenavam: number;
    customerId: string;
    autoTypeId: string;
}

export { ICreateAutomovelDTO };