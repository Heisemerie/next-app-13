import { NextRequest, NextResponse } from "next/server";
import middleware from "next-auth/middleware";

// export function middleware(request: NextRequest) {
//   //this function gets executed on every request
//   //here we have the chance check the user session and redirect them to the login page
//   //we won't implement the logic here because it is already implemented in NextAuth
//   //this is for demonstration. we just show how middleware in Next.js works
//   return NextResponse.redirect(new URL("/new-page", request.url));
// }

export default middleware; 

export const config = {
  // *: zero or more params
  // +: one or more params
  // ?: zero or one params
  matcher: ["/users/:id*"],
}; //to specify specific paths for the middleware to run
