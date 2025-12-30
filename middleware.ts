import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ token }) => !!token
  },
});

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/api/classes/:path*',
    '/api/groups/:path*',
    '/api/notifications/:path*',
    '/api/alumnos/:path*',
  ]
};
