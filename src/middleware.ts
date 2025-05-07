export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/dashboard'],
  // matcher: ['/dashboard/:path*', '/profile/:path*'], // Example for matching all paths under /dashboard and /profile
};
