import type { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

export const logger = (handler: NextApiHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    return handler(req, res);
  };
};
