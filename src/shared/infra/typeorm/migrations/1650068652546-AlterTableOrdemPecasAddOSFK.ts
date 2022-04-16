import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AlterTableOrdemPecasAddOSFK1650068652546 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('ordem_pecas', new TableColumn({
            name: 'ordemServicoId',
            type: 'uuid',
            isNullable: false,
            
        }))

        await queryRunner.createForeignKey('ordem_pecas', new TableForeignKey({
            columnNames: ["ordemServicoId"],
            referencedColumnNames: ["id"],
            referencedTableName: "ordem_servico",
            onDelete: "RESTRICT",
            onUpdate: "RESTRICT"
        }))
    }
    

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE ordem_pecas DROP COLUMN "ordemServicoId"')
    }

}
