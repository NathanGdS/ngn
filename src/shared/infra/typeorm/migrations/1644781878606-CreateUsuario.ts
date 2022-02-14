import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsuario1644781878606 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
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
                        name: "password",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "rg",
                        type: "varchar(11)",
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: "cpf",
                        type: "varchar(14)",
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
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: "is_admin",
                        type: "boolean",
                        default: false,
                        isNullable: false
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }

                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
