import {getRepository, MigrationInterface, QueryRunner} from "typeorm";
import { AdminUser } from "../seed/adminUser.seed";

export class SeedUserAdmin1650584145249 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await getRepository('usuarios').save(AdminUser)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        
    }

}
