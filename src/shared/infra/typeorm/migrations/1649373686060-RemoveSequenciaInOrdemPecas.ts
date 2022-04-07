import {MigrationInterface, QueryRunner} from "typeorm";

export class RemoveSequenciaInOrdemPecas1649373686060 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE ordem_pecas DROP COLUMN sequencia')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE ordem_pecas ADD COLUMN sequencia')
    }

}
