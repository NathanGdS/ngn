import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterOrdemServicoSetTotalValueDefault1650412092218 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ordem_servico" ALTER COLUMN "valorTotal" SET DEFAULT '0.00'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ordem_servico" ALTER COLUMN "valorTotal" DROP DEFAULT`);
    }

}
