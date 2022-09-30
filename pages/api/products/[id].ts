import { read } from "fs";
import { NextApiRequest, NextApiResponse } from "next";

export default function getHome(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  console.log(req.query);
  console.log(req.url);
  console.log(req.method);
  return res.status(202).json(`[ID] ${id}`);
}
