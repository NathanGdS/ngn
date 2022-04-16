import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (host = "database"): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions();
    
    if(process.env.SERVER_TYPE == 'dev') {
        return createConnection(
            Object.assign(defaultOptions, {
                host: process.env.NODE_ENV === "test" ? "localhost" : host,
                database:
                    process.env.NODE_ENV === "test"
                        ? "oficina_database"
                        : defaultOptions.database,
            })
        );
    }else {
        return createConnection(
            Object.assign(defaultOptions, {
                host: process.env.DATABASE_HOST,
                database: process.env.DATABASE_NAME
            })
        );
    }

}; 