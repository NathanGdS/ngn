import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterOrdemServicoSetStatusIdDefault1650335861927 implements MigrationInterface {
    
    public async up(queryRunner: QueryRunner): Promise<void> {
        const setDefaultStatus = await queryRunner.query(`SELECT id FROM "ordem_status" WHERE "status_numero" = 1`)
        await queryRunner.query(`ALTER TABLE "ordem_servico" ALTER COLUMN "statusId" SET DEFAULT '${setDefaultStatus[0].id}'`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ordem_servico" ALTER COLUMN "statusId" DROP DEFAULT`)
    }

}
