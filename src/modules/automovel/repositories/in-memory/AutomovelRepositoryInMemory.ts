import { Automovel } from "@modules/automovel/infra/typeorm/entities/Automovel";
import { Cliente } from "@modules/cliente/infra/typeorm/entities/Cliente";
import { IAutomovelRepository } from "../IAutomovelRepository";

class AutomovelRepositoryInMemory implements IAutomovelRepository {
    automoveis: Automovel[] = [];
    
    async create(
        { autoPlate, autoModel, autoBrand, autoColor, autoYear, autoRenavam, customerId, autoTypeId }
    ): Promise<Automovel> {
        const automovel = new Automovel();

        Object.assign(automovel, {
            autoPlate,
            autoModel,
            autoBrand,
            autoColor,
            autoYear,
            autoRenavam,
            customerId,
            autoTypeId
        });

        this.automoveis.push(automovel);

        return automovel;
    }

    async findAll(): Promise<Automovel[]> {
        return this.automoveis;
    }

    async findByClient(customerId: Cliente): Promise<Automovel> {
        //implementar para mais de um registro retornado --> Automovel[]
        return this.automoveis.find((automovel) => automovel.customerId === customerId);
    }

    async findById(id: string): Promise<Automovel> {
        return this.automoveis.find((automovel) => automovel.id === id);
    }
}

export { AutomovelRepositoryInMemory };