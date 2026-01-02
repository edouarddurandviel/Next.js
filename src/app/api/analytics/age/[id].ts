import { getOneStatistic } from "@app/services/analytics/data/analytics";
import { Statistiques } from "@app/types/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function userHandler(req: NextApiRequest, res: NextApiResponse<Statistiques>) {
  const { method } = req;
  const data = { id: "1" };

  switch (method) {
    case "GET":
      {
        try {
          const result = await getOneStatistic(data);
          res.status(200).json(result[0]);
        } catch (err: any) {
          res.json(err);
        }
      }
      break;

    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
