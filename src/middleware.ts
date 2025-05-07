export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/dashboard', '/'], // Add any other paths you want to protect with authentication
  // matcher: ['/dashboard/:path*', '/profile/:path*'], // Example for matching all paths under /dashboard and /profile
};
