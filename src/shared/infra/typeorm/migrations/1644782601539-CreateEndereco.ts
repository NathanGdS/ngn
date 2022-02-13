import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateEndereco1644782601539 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("enderecos");
    }

}
