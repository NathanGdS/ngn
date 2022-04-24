import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterTelefoneRenameColumns1648430499503 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE "telefones" RENAME COLUMN tel_number TO number')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE "telefones" RENAME COLUMN number TO tel_number')
    }

}
