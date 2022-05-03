import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddTelefoneCeluarColumnInCliente1651535893232 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('clientes', new TableColumn({
            name: 'telefoneCelular',
            type: 'varchar',
            isNullable: false,
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('clientes', 'telefoneCelular')
    }

}
