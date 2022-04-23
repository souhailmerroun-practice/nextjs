// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Data, Tip } from '../types';
import fs from "fs";
import path from "path";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const fileData = fs.readFileSync(path.resolve('data/tips.json'), "utf8");
  const jsonData = JSON.parse(fileData);

  res.status(200).json({ tips: jsonData });
}
