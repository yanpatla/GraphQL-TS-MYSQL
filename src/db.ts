import { createConnection } from "typeorm";
import { Users } from "./Entities/Users";

export const connectDB = async () => {
  await createConnection({
    type: "mysql",
    username: "root",
    password: "root",
    port: 3306,
    host: "localhost",
    database: "usersdb",
    //*Para que pueda definir que tablas va a estar creadas en mi DB
    entities: [Users],
    //* Lo que nos va a Permitir crear las Tablas si existen
    synchronize: true,
    //*Para Conexiones Seguras
    ssl: false,
  });
};
