import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterAutomovelAddCustomerId1648173011280 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE "automoveis" ADD COLUMN "customerId" uuid NOT NULL, ADD CONSTRAINT "customerIdFK" FOREIGN KEY ("customerId") REFERENCES "clientes" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE automoveis DROP COLUMN customerId')
    }

}
