import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterTelefoneUniqueNumber1648435445801 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE "telefones" DROP CONSTRAINT "UQ_f0cdb3412c00e2632d22c91eeb7"')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "telefones" ADD CONSTRAINT "UQ_f0cdb3412c00e2632d22c91eeb7" UNIQUE ("number")')
    }

}
