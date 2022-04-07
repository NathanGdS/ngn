import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterTableOrdemPecaDropSequencia1649374312494 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE ordem_pecas DROP COLUMN sequencia")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE ordem_pecas ADD COLUMN sequencia INT DEFALUT 1")
    }

}
