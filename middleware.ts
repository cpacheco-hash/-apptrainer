export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/api/classes/:path*',
    '/api/groups/:path*',
    '/api/notifications/:path*',
    '/api/alumnos/:path*',
  ]
};
