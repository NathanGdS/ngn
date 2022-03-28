import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterEnderecoDropNullFKs1648431426376 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE "enderecos" ALTER COLUMN "customerId" DROP NOT NULL, ALTER COLUMN "userId" DROP NOT NULL')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE "enderecos" ALTER COLUMN "customerId" DROP NOT NULL, ALTER COLUMN "userId" DROP NOT NULL')
    }

}
