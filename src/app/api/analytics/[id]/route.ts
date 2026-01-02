import { userIdShema } from "@app/schemas/user";
import { getOneStatistic } from "@app/services/analytics/data/analytics";
import { NextRequest } from "next/server";

export async function GET(_: NextRequest, ctx: RouteContext<"/api/analytics/[id]">) {
  try {
    const params = await ctx.params;
    const statId = await userIdShema.validateAsync(params);

    const result = await getOneStatistic(statId);

    return Response.json(result, { status: 202 });
  } catch (error: any) {
    return Response.json({ message: error });
  }
}
