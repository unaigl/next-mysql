import { NextApiRequest, NextApiResponse } from "next";
import { pool } from "../../../config/db";

// arreglo manual, ya que no me ha cogido desde el body de la consulta http los typos
interface PRODUCT {
  name: string;
  description: string;
  price: number;
}

export default async function getHome(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      return res.status(202).json("PRODUCTS INDEX");
    case "POST":
      console.log(req.body);
      const { description, name, price } = req.body as PRODUCT;
      // insertar en la tabla "product", no en la base de datos "productsdb". Ya que pool es una conexion con "productsdb"
      const result = await pool.query("INSERT INTO product SET ? ", {
        description,
        name,
        price,
      });
      console.log(result);
      if (result) return res.status(202).json("saving to DB");
      return res.status(502).json("fail");
  }

  // const result = (await pool.query("SELECT NOW();")) as any;
  // console.log(result[0][0]["NOW()"]);
}
