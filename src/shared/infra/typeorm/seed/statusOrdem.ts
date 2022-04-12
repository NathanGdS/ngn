import { createConnection } from "typeorm";
import { v4 as uuidV4 } from "uuid";

async function create() {
    const connection = await createConnection("localhost")

    const id = uuidV4()

    await connection.query(
        `INSERT INTO ordem_status (id, descricao) VALUES ('${id}', 'Aberta')`
    )

    await connection.close()
}

create().then(() => console.log("Status Ordem criado com sucesso!"))