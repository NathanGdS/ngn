import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrdemServicoTable1649724571332 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "ordem_servico",
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'descricao',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'valorTotal',
                        type: 'numeric',
                        isNullable: false
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "finished_at",
                        type: "timestamp"
                    },

                    {
                        name: "statusId",
                        type: "uuid",
                        isNullable: false
                    },
                    {
                        name: "clienteId",
                        type: "uuid",
                        isNullable: false
                    },
                    {
                        name: "automovelId",
                        type: "uuid",
                        isNullable: false
                    },
                ],
                foreignKeys: [
                    {
                        name: "statusIdFK",
                        referencedTableName: "ordem_status",
                        referencedColumnNames: ["id"],
                        columnNames: ["statusId"],
                        onUpdate: "RESTRICT",
                        onDelete: "RESTRICT"
                    },
                    {
                        name: "clienteIdFK",
                        referencedTableName: "clientes",
                        referencedColumnNames: ["id"],
                        columnNames: ["clienteId"],
                        onUpdate: "RESTRICT",
                        onDelete: "RESTRICT"
                    },
                    {
                        name: "automovelIdFK",
                        referencedTableName: "automoveis",
                        referencedColumnNames: ["id"],
                        columnNames: ["automovelId"],
                        onUpdate: "RESTRICT",
                        onDelete: "RESTRICT"
                    }

                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("ordem_servico");
    }

}
