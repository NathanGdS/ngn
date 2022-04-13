import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterOrdemServicoRemoveClientId1649879291274 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE ordem_servico DROP COLUMN "clienteId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE ordem_servico ADD COLUMN "clienteId"`);
    }

}
