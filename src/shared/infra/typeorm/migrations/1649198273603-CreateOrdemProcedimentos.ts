import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrdemProcedimentos1649198273603 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "ordem_procedimentos",
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
                    }
                ]
            })

        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("ordem_procedimentos")
    }

}
