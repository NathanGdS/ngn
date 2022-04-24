import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AlterTableOrdemProcedimentosAddOSFK1650064772932 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('ordem_procedimentos', new TableColumn({
            name: 'ordemServicoId',
            type: 'uuid',
            isNullable: false,
            
        }))

        await queryRunner.createForeignKey('ordem_procedimentos', new TableForeignKey({
            columnNames: ["ordemServicoId"],
            referencedColumnNames: ["id"],
            referencedTableName: "ordem_servico",
            onDelete: "RESTRICT",
            onUpdate: "RESTRICT"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE ordem_procedimentos DROP COLUMN "ordemServicoId"')
    }

}
