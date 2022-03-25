import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEndereco1648172716897 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "enderecos",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "add_cep",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "add_street",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "add_number",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "add_supplement",
                        type: "varchar"
                    },
                    {
                        name: "add_district",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "add_town",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "add_uf",
                        type: "varchar",
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
                        referencedTableName: "clientes",
                        referencedColumnNames: ["id"],
                        columnNames: ["customer_id"],
                        onUpdate: "RESTRICT",
                        onDelete: "RESTRICT"
                    },
                    {
                        name: "user",
                        referencedTableName: "usuarios",
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
        await queryRunner.dropTable("enderecos");
    }

}
