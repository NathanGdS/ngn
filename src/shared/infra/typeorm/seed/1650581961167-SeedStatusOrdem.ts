import { getRepository, MigrationInterface, QueryRunner } from "typeorm";
import { StatusOrdemSeed } from "./statusOrdem.seed";

export class SeedStatusOrdem1650581961167 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await getRepository('ordem_status').save(StatusOrdemSeed)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER SEQUENCE ordem_status_status_number_seq RESTART WITH 1`)
    }

}
