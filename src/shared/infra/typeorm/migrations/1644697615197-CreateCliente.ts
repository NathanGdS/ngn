import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCliente1644697615197 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "customers",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        generationStrategy: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar(100)",
                        isNullable: false
                    },
                    {
                        name: "cpf",
                        type: "varchar(14)",
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: "rg",
                        type: "varchar(11)",
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: "birth_date",
                        type: "date",
                        isNullable: false
                    },
                    {
                        name: "email",
                        type: "varchar(60)",
                        isNullable: true,
                        isUnique: true
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("customers");
    }

}
