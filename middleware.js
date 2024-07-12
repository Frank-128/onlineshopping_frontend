import { NextResponse } from 'next/server';
import {jwtDecode} from "jwt-decode";

// Middleware function
export function middleware(req) {
  const url = req.nextUrl.clone();
  const authCookie = req.cookies.get('token');

  if (url.pathname.startsWith('/admin')) {

    if (!authCookie) {
      url.pathname = '/signin';
      return NextResponse.redirect(url);
    }else{

      const user = jwtDecode(authCookie.value)

      if(user.role[0].authority === 'ADMIN'){

        return NextResponse.next();
      }
      url.pathname = '/';
      return NextResponse.redirect(url);

    }
  }

  if (url.pathname.startsWith('/cart') || url.pathname.startsWith('/payments') || url.pathname.startsWith('/my_orders') || url.pathname.startsWith('/profile')) {

    if (!authCookie) {
      url.pathname = '/signin';
      return NextResponse.redirect(url);
    }else{

      return NextResponse.next();

    }
  }

  return NextResponse.next();
}


export const config = {
  matcher:[ '/admin/:path*','/cart/:path*', '/my_payments/:path*','/my_orders/:path*','/profile/:path*']
};
