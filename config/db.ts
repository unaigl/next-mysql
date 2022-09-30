import { createPool } from "mysql2/promise";
import { config } from "./config";

const pool = createPool({
  host: config.HOST,
  user: config.USER,
  password: config.PASSWORD,
  port: config.PORT,
  database: config.DBNAME,
});

export { pool };
