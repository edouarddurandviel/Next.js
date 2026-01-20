import { Middleware } from "@app/types/types";
import { NextRequest, NextResponse } from "next/server";

// return NextResponse | Promise<NextResponse>
// actions processed before request get to the routerApi. Request are immutable.

export const compose = (middlewares: Middleware[]): Middleware => {
  return async (req: NextRequest) => {
    for (const mdw of middlewares) {
      const registeredMiddleware = await mdw(req);
      if (registeredMiddleware) {
        return registeredMiddleware;
      }
    }
    return NextResponse.next();
  };
};

export const authMiddleware = (req: NextRequest): NextResponse => {
  const token = req.cookies.get("user");
  // check registration token and vlidity
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
};

export const analyticsMiddleware = (req: NextRequest): NextResponse => {
  //const role = req.cookies.get('app_id');
  // check registration request
  return NextResponse.next();
};

export const adminMiddleware = (req: NextRequest): NextResponse => {
  const role = req.cookies.get("role_id");
  if (role) {
    return NextResponse.redirect(new URL("/not-authorized", req.url));
  }
  return NextResponse.next();
};
