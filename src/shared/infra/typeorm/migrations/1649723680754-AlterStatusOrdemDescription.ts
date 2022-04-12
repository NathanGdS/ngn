import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterStatusOrdemDescription1649723680754 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE ordem_status RENAME COLUMN description TO descricao")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE ordem_status RENAME COLUMN descricao TO description")
    }

}
