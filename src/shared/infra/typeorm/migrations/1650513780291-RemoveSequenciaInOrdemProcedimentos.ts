import {MigrationInterface, QueryRunner} from "typeorm";

export class RemoveSequenciaInOrdemProcedimentos1650513780291 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE ordem_procedimentos DROP COLUMN sequencia')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE ordem_procedimentos ADD COLUMN sequencia')
    }

}
