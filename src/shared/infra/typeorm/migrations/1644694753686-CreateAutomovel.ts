import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAutomovel1644694753686 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "automoveis",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        generationStrategy: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "plate",
                        type: "char(7)",
                        isNullable: false
                    },
                    {
                        name: "model",
                        type: "varchar(30)",
                        isNullable: false
                    },
                    {
                        name: "brand",
                        type: "varchar(20)",
                        isNullable: false
                    },
                    {
                        name: "color",
                        type: "varchar(20)",
                        isNullable: false
                    },
                    {
                        name: "year",
                        type: "int(4)",
                        unsigned: true
                    },
                    {
                        name: "renavam",
                        type: "int(11)",
                        unsigned: true
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "auto_type_id",
                        type: "uuid"
                    },
                    {
                        name: "cliente_id",
                        type: "uuid"
                    }
                ],
                foreignKeys: [
                    {
                        name: "autoType",
                        referencedTableName: "tipos_automoveis",
                        referencedColumnNames: ["id"],
                        columnNames: ["auto_type_id"],
                        onUpdate: "CASCADE",
                        onDelete: "CASCADE"
                    },
                    {
                        name: "customer",
                        referencedTableName: "clientes",
                        referencedColumnNames: ["id"],
                        columnNames: ["cliente_id"],
                        onUpdate: "CASCADE",
                        onDelete: "CASCADE"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("automoveis");
    }

}
