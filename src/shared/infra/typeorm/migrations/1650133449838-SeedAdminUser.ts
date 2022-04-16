import {getRepository, MigrationInterface, QueryRunner} from "typeorm";
import { AdminUser } from "../seed/adminUser.seed";

export class SeedAdminUser1650133449838 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await getRepository("usuarios").save(
            AdminUser
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await getRepository("usuarios").delete(
            AdminUser
        )
    }

}
