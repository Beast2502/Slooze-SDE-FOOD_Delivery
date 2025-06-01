import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {

    const path = request.nextUrl.pathname;


    const isPublicPath = path === '/login' || path === '/signup'

    const token = request.cookies.get('token')?.value || ''

    // const token = false;


    console.log(token, "PATHH=>>");


    if (!token) {
        return NextResponse.redirect(new URL('/login' , request.nextUrl))
    }




    // if (isPublicPath && token) {
    //     return NextResponse.redirect(new URL('/' , request.nextUrl))
    // }

    // if(!isPublicPath && !token){
    //     return NextResponse.redirect(new URL('/login' , request.nextUrl));

    // }
}


export const config = {
    matcher: [
        '/profile/:path*',
        '/product/:path*',
        '/user/:path*'
    ]
}