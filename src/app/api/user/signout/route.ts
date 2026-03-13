import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest) {
  try {
    const resp = NextResponse.json({ message: "Logged out" });

    resp.cookies.delete("jwt")

    return resp;
  } catch (error: unknown) {
    return Response.json({ message: error });
  }
}
