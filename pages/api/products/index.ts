import { NextApiRequest, NextApiResponse } from "next";
import { pool } from "../../../config/db";
import { Product } from "../../../types/products";

export default async function getHome(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      return await getProducts(req, res);
    case "POST":
      return await createProduct(req, res);
  }
}

const getProducts = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await pool.query("SELECT * FROM product");
  const products = data[0] as Product[];
  if (!products) res.status(302).json("PRODUCTS does not exist");
  return res.status(202).json(products);
};

const createProduct = async (req: NextApiRequest, res: NextApiResponse) => {
  const { description, name, price } = req.body as Product;
  const products = await pool.query("INSERT INTO product SET ? ", {
    description,
    name,
    price,
  });
  if (!products) return res.status(502).json("FAIL saving to DB");
  return res.status(202).json(products);
};
