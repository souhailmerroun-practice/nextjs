import type { NextApiRequest, NextApiResponse } from 'next'
import { Data } from '../../src/types';
import { TipControllerIndex } from '../../src/controllers/TipController';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const jsonData = TipControllerIndex();

  res.status(200).json({ tips: jsonData });
}
