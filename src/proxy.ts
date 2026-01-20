import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Different chains per route group
const protectedRoutes = ["/dashboard", "/dashboard/:path*"];

// Link events and router/navigation
export default async function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);

  // Authentication
  const getCookie = await cookies();
  const isAuth = getCookie.get("jwt");

  if (path === "/login" && isAuth) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }
  if (path === "/logout" && !isAuth) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  if (isProtectedRoute && !isAuth) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
