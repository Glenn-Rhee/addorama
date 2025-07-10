import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const xtr = req.cookies.get("xtr")?.value;
  if (xtr) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config: MiddlewareConfig = {
  matcher: ["/auth/login", "/auth/signup"],
};
