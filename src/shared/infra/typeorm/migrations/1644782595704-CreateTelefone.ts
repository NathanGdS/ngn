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
                        name: "customerId",
                        type: "uuid"
                    },
                    {
                        name: "userId",
                        type: "uuid"
                    }
                ],
                foreignKeys: [
                    {
                        name: "customerIdFK",
                        referencedTableName: "clientes",
                        referencedColumnNames: ["id"],
                        columnNames: ["customerId"],
                        onUpdate: "RESTRICT",
                        onDelete: "RESTRICT"
                    },
                    {
                        name: "userIdFK",
                        referencedTableName: "usuarios",
                        referencedColumnNames: ["id"],
                        columnNames: ["userId"],
                        onUpdate: "RESTRICT",
                        onDelete: "RESTRICT"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("telefones");
    }

}
