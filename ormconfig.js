console.log('Ambiente: ', process.env.SERVER_TYPE);

let entities = "";
let migrations = "";
let migrationsDir = "";

if (process.env.SERVER_TYPE == 'dev') {
  entities = "./src/modules/**/infra/typeorm/entities/*.ts";
  migrations = "./src/shared/infra/typeorm/migrations/*.ts";
  migrationsDir = "./src/shared/infra/typeorm/migrations";
  module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "entities": [entities],
    "migrations": [migrations],
    "ssl": {
      ssl: true,
      rejectUnauthorized: false
    },
    "cli": {
      "migrationsDir": migrationsDir,
    }
  }
} else {
  entities = __dirname + "/dist/src/modules/**/infra/typeorm/entities/*.js";
  migrations = __dirname + "/dist/src/shared/infra/typeorm/migrations/*.js";
  migrationsDir = __dirname + "/dist/src/shared/infra/typeorm/migrations";
  console.log(entities);
  console.log(migrations);
  console.log(migrationsDir);
  module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "entities": [entities],
    "migrations": [migrations],
    "ssl": true,
    "cli": {
      "migrationsDir": migrationsDir,
    }
  }
}



// {
//     "type": "postgres",
//     "port": 5432,
//     "host": "ec2-52-203-118-49.compute-1.amazonaws.com",
//     "username": "irzecfmpkxyfqi",
//     "password": "e8372907b8caf85145d0b5eeb44a990c4026a0f6576fd30172b75d5c66d7cb3a",
//     "database": "dcs4hd6ibe2949",
//     "migrations": ["./src/shared/infra/typeorm/migrations/*.ts"],
//     "entities": [
//         "./src/modules/**/infra/typeorm/entities/*.ts"
//     ],
//     "cli": {
//         "migrationsDir": "./src/shared/infra/typeorm/migrations"
//     }
// }

