// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Data } from '../types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const tip = {
    title: "Tip",
    description: "This is a tip",
    author: "John Doe",
  };

  const tip2 = {
    title: "Another tip",
    description: "This is a random one",
    author: "Jane Doe",
  };

  const tip3 = {
    title: "Here is it",
    description: "Lorem ipsum something",
    author: "Jane Jana",
  };

  res.status(200).json({ tips: [tip, tip2, tip3] });
}
