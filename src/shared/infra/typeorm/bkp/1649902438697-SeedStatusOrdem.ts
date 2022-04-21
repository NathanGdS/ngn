import {getRepository, MigrationInterface, QueryRunner} from "typeorm";
import { StatusOrdemSeed } from "../seed/statusOrdem.seed";

export class SeedStatusOrdem1649902438697 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await getRepository("ordem_status").save(
            StatusOrdemSeed
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await getRepository("ordem_status").delete(
            StatusOrdemSeed
        )
    }

}
