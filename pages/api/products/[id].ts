import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import Error from "next/error";
import { pool } from "../../../config/db";
import { Product, Products } from "../../../types/products";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      return await getProduct(req, res);
    case "DELETE":
      return await deleteProduct(req, res);
    case "PUT":
      return await updateProduct(req, res);
  }
}

const getProduct = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const result = await pool.query("SELECT * FROM product WHERE id = ?", [
      req.query.id,
    ]);
    return res.status(200).json(result[0]);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await pool.query("DELETE FROM product WHERE id = ?", [req.query.id]);
    return res.status(204).json("Data deleted successfully");
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
const updateProduct = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await pool.query("UPDATE product SET ? WHERE id = ?", [
      req.body,
      req.query.id,
    ]);
    return res.status(204).json("Data deleted successfully");
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
