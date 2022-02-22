import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEndereco1644782601539 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "adresses",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "add_cep",
                        type: "varchar(9)",
                        isNullable: false
                    },
                    {
                        name: "add_street",
                        type: "varchar(100)",
                        isNullable: false
                    },
                    {
                        name: "add_number",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "add_supplement",
                        type: "varchar(30)"
                    },
                    {
                        name: "add_district",
                        type: "varchar(40)",
                        isNullable: false
                    },
                    {
                        name: "add_town",
                        type: "varchar(40)",
                        isNullable: false
                    },
                    {
                        name: "add_fu",
                        type: "char(2)",
                        isNullable: false
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "customer_id",
                        type: "uuid",
                        isNullable: true
                    },
                    {
                        name: "user_id",
                        type: "uuid",
                        isNullable: true
                    }
                ],
                foreignKeys: [
                    {
                        name: "customer",
                        referencedTableName: "customers",
                        referencedColumnNames: ["id"],
                        columnNames: ["customer_id"],
                        onUpdate: "RESTRICT",
                        onDelete: "RESTRICT"
                    },
                    {
                        name: "user",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onUpdate: "RESTRICT",
                        onDelete: "RESTRICT"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("adresses");
    }

}
