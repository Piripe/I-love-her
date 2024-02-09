import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getUser } from './auth'
 
export async function middleware(request: NextRequest) {
  // const currentUser = request.cookies.get('currentUser')?.value
 
  // console.log(`User: ${getUser(currentUser??"")}`);

  // if (getUser(currentUser??"")==null) {
  //     return NextResponse.redirect(new URL('/login?redirect='+encodeURIComponent(request.nextUrl.pathname), request.url))
  // }
}
 
export const config = {
  matcher: ['/((?!view|api|login|_next/static|_next/image|.*\\.(?:png|webp|gif|webm|jpg|svg|ico)$).*)'],
}