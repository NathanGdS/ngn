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
                        isPrimary: true
                    },
                    {
                        name: "plate",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "model",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "brand",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "color",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "year",
                        type: "numeric"
                    },
                    {
                        name: "renavam",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "typeId",
                        type: "uuid",
                        isNullable: false
                    }
                ],
                foreignKeys: [
                    {
                        name: "typeIdFK",
                        referencedTableName: "tipo_automoveis",
                        referencedColumnNames: ["id"],
                        columnNames: ["typeId"],
                        onUpdate: "RESTRICT",
                        onDelete: "RESTRICT"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("automoveis");
    }

}
