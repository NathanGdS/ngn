import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAutomovel1644694753686 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "automobiles",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
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
                        name: "customer_id",
                        type: "uuid"
                    }
                ],
                foreignKeys: [
                    {
                        name: "autoType",
                        referencedTableName: "automobile_types",
                        referencedColumnNames: ["id"],
                        columnNames: ["auto_type_id"],
                        onUpdate: "RESTRICT",
                        onDelete: "RESTRICT"
                    },
                    {
                        name: "customer",
                        referencedTableName: "customers",
                        referencedColumnNames: ["id"],
                        columnNames: ["customer_id"],
                        onUpdate: "RESTRICT",
                        onDelete: "RESTRICT"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("automobiles");
    }

}
