import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTelefone1644782595704 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("telefones");
    }

}
