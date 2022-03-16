import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTelefone1644782595704 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "telefones",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "tel_number",
                        type: "varchar",
                        isNullable: false,
                        isUnique: true
                    }, 
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "customer_id",
                        type: "uuid"
                    },
                    {
                        name: "user_id",
                        type: "uuid"
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
        await queryRunner.dropTable("telephones");
    }

}
