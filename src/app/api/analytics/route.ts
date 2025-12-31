// hide API keys, interact with a DB, or process sensitive logic.
// without params
import { getAllStatistiques } from 'edouard/services/analytics/data/analytics';
import { NextRequest } from 'next/server';

export async function GET(_: NextRequest, ctx: RouteContext<'/api/analytics'>) {
  const result = await getAllStatistiques();

  if (result.length === 0)
    return Response.json({ error: 'Statistiques not found' }, { status: 404 });

  return Response.json(result);
}
