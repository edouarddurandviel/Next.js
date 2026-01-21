import { userIdShema } from "@app/schemas/user";
import { getOneAnalytic, updateOneAnalytic } from "@app/services/analytics/data/analytics";
import { NextRequest } from "next/server";

// GET POST PATCH DELETE PUT exported
// functions are scanned and mapped into internal router
////////////////////////////////////////////////////////

export async function GET(_: NextRequest, ctx: RouteContext<"/api/analytics/[id]">) {
  try {
    const params = await ctx.params;
    const statId = await userIdShema.validateAsync(params);

    const result = await getOneAnalytic(statId);

    return Response.json(result, { status: 202 });
  } catch (error: unknown) {
    return Response.json({ message: error });
  }
}

export async function POST(_: NextRequest, ctx: RouteContext<"/api/analytics/[id]">) {
  try {
    const params = await ctx.params;
    const statId = await userIdShema.validateAsync(params);

    const result = await getOneAnalytic(statId);

    return Response.json(result, { status: 202 });
  } catch (error: unknown) {
    return Response.json({ message: error });
  }
}

export async function PUT(_: Request, ctx: RouteContext<"/api/analytics/[id]">) {
  try {
    const params = await ctx.params;
    const taskId = await userIdShema.validateAsync(params);
    const body = await _.json();

    const result = await updateOneAnalytic(taskId.id, body);

    return Response.json(result, { status: 202 });
  } catch (error: unknown) {
    return Response.json({ message: error });
  }
}

export async function DELETE(_: NextRequest, ctx: RouteContext<"/api/analytics/[id]">) {
  try {
    const params = await ctx.params;
    const statId = await userIdShema.validateAsync(params);

    const result = await getOneAnalytic(statId);

    return Response.json(result, { status: 202 });
  } catch (error: unknown) {
    return Response.json({ message: error });
  }
}
