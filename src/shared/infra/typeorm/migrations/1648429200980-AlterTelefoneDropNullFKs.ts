import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterTelefoneDropNullFKs1648429200980 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE "telefones" ALTER COLUMN "customerId" DROP NOT NULL, ALTER COLUMN "userId" DROP NOT NULL')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE "telefones" ALTER COLUMN "customerId" SET NOT NULL, ALTER COLUMN "userId" SET NOT NULL')
    }

}
