import { createConnection } from "typeorm";

export const connectDB = async () => {
  await createConnection({
    type: "mysql",
    username: "root",
    password: "root",
    port: 3306,
    host: "localhost",
    database: "usersdb",
    //*Para que pueda definir que tablas va a estar creadas en mi DB
    entities: [],
    //* Lo que nos va a Permitir crear las Tablas si existen
    synchronize: false,
    //*Para Conexiones Seguras
    ssl: false,
  });
};
