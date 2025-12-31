import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';

export const asyncHandler = (handler: NextApiHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await handler(req, res);
    } catch {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
};
