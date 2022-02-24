import { Automovel } from "@modules/automovel/infra/typeorm/entities/Automovel";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Automovel)
class AutomovelRepositoryInDatabase extends Repository<Automovel> {

    async findAll(): Promise<Automovel[]> {
        const automovel = await this.findAll();

        return automovel;
    }

    async findBydId(id: string): Promise<Automovel | undefined> {
        const automovel = await this.findOne({
            where: {
                id
            }
        });

        return automovel;
    }

    async findByRenavam(renavam: string): Promise<Automovel | undefined> {
        const automovel = await this.findOne({
            where: {
                autoRenavam: renavam
            }
        });

        return automovel;
    }

}

export { AutomovelRepositoryInDatabase };