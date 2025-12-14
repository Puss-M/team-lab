import { auth } from "@/lib/auth";

export default auth((req) => {
  if (!req.auth && (req.nextUrl.pathname.startsWith("/internal") || req.nextUrl.pathname.startsWith("/workspace"))) {
    const newUrl = new URL("/auth/signin", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: ["/internal/:path*", "/workspace/:path*", "/archives/:path*"],
};
