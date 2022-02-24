import { TipoAutomovel } from "@modules/automovel/infra/typeorm/entities/TipoAutomovel";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(TipoAutomovel)
class TipoAutomovelRepositoryInDatabase extends Repository<TipoAutomovel> {
    async findAll(): Promise<TipoAutomovel[]> {
        const tipoAutomovel = await this.findAll();

        return tipoAutomovel;
    }

    async findById(id: string): Promise<TipoAutomovel> {
        const tipoAutomovel = await this.findOne({
            where: {
                id
            }
        });

        return tipoAutomovel;
    }

    async findByDescription(description: string): Promise<TipoAutomovel> {
        const tipoAutomovel = await this.findOne({
            where: {
                description
            }
        });

        return tipoAutomovel;
    }
}

export { TipoAutomovelRepositoryInDatabase };