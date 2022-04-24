import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterEnderecoRenameColumns1648430752297 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE "enderecos" RENAME COLUMN "add_cep" TO "cep"; ALTER TABLE "enderecos" RENAME COLUMN "add_street" TO "street"; ALTER TABLE "enderecos" RENAME COLUMN "add_number" TO "number"; ALTER TABLE "enderecos" RENAME COLUMN "add_supplement" TO "supplement"; ALTER TABLE "enderecos" RENAME COLUMN "add_district" TO "district"; ALTER TABLE "enderecos" RENAME COLUMN "add_town" TO "town"; ALTER TABLE "enderecos" RENAME COLUMN "add_uf" TO "uf"; ALTER TABLE "enderecos" RENAME COLUMN "customer_id" TO "customerId"; ALTER TABLE "enderecos" RENAME COLUMN "user_id" TO "userId"')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE "enderecos" RENAME COLUMN "cep" TO "add_cep"; ALTER TABLE "enderecos" RENAME COLUMN "street" TO "add_street"; ALTER TABLE "enderecos" RENAME COLUMN "number" TO "add_number"; ALTER TABLE "enderecos" RENAME COLUMN "supplement" TO "add_supplement"; ALTER TABLE "enderecos" RENAME COLUMN "district" TO "add_district"; ALTER TABLE "enderecos" RENAME COLUMN "town" TO "add_town"; ALTER TABLE "enderecos" RENAME COLUMN "uf" TO "add_uf"; ALTER TABLE "enderecos" RENAME COLUMN "customerId" TO "customer_id"; ALTER TABLE "enderecos" RENAME COLUMN "userId" TO "user_id"')
    }

}
