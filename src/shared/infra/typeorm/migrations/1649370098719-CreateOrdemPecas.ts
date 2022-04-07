import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrdemPecas1649370098719 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "ordem_pecas",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "sequencia",
                        type: "int",
                        default: 1
                    },
                    {
                        name: "descricao",
                        type: "varchar"
                    },
                    {
                        name: "valor_unitario",
                        type: "numeric"
                    },
                    {
                        name: "quantidade",
                        type: "int",
                        default: 1
                    },
                    {
                        name: "valor_total",
                        type: "numeric"
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
        await queryRunner.dropTable("ordem_pecas")
    }

}
