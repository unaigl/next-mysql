import dotenv from "dotenv";
dotenv.config();

interface Configuration {
  PORT: number;
  HOST: string;
  DBNAME: string;
  USER: string;
  PASSWORD: string;
}

export const config: Configuration = {
  PORT: /* process.env.PORT ||  */ 3306,
  HOST: process.env.HOST || "localhost",
  DBNAME: process.env.DBNAME || "productsdb",
  USER: process.env.USER || "root",
  PASSWORD: process.env.PASSWORD || "",
};
