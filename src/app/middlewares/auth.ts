import type { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

export const auth = (handler: NextApiHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.headers.authorization;

    if (!token || token !== `Bearer ${process.env.API_SECRET}`) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    return handler(req, res);
  };
};
