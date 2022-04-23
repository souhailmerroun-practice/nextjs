// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Tip = {
  title: string
  description: string
  author: string
}

type Data = {
  tips: Tip[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const tip = {
    title: "Tip",
    description: "This is a tip",
    author: "John Doe",
  };

  res.status(200).json({ tips: [tip] });
}
