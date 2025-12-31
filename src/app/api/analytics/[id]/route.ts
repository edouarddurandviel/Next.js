import { userIdShema } from 'edouard/schemas/user';
import { getOneStatistic } from 'edouard/services/analytics/data/analytics';
import { NextRequest } from 'next/server';

export async function GET(_: NextRequest, ctx: RouteContext<'/api/analytics/[id]'>) {
  try {
    const params = await ctx.params;
    const statId = await userIdShema.validateAsync(params);

    const result = await getOneStatistic(statId);

    return Response.json(result, { status: 202 });
  } catch (error: any) {
    return Response.json({ message: error });
  }
}
