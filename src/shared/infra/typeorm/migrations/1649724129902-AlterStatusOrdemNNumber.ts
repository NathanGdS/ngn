import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterStatusOrdemNNumber1649724129902 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ordem_status" RENAME COLUMN "status_number" TO "status_numero"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ordem_status" RENAME COLUMN "status_numero" TO "status_number"`);
    }

}
