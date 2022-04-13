import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterOrdemServicoSetNullableFinishedAt1649879139190 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE ordem_servico ALTER COLUMN finished_at DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE ordem_servico ALTER COLUMN finished_at DROP NULL`);
    }

}
