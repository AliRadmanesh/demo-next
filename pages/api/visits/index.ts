import type { NextApiRequest, NextApiResponse } from "next";

type Data = { visits: number };

let visits = 0;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ visits: ++visits });
}
