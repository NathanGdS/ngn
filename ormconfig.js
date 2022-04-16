console.log('process.env.DATABASEE_URL :>> ', process.env.DATABASE_URL);
module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "entities": [
    "./src/modules/**/infra/typeorm/entities/*.ts"
 ],
 "migrations": ["./src/shared/infra/typeorm/migrations/*.ts"],
 "cli":{
  "migrationsDir": "./src/shared/infra/typeorm/migrations",
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

