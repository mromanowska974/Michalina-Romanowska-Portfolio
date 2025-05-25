import { NextResponse } from "next/server";
// import { signOut } from "./auth";
import { cookies } from "next/headers";

const protectedRoutes = [
    '/secret-door/questions',
    '/secret-door/edit-projects',
    '/secret-door/add-project'
];

export default async function middleware(request) {
    const token = request.cookies.get('authjs.session-token')?.value;
    const pathname = request.nextUrl.pathname;

    const isProtected = protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route));

    if(!token && isProtected) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    if(token && pathname === '/secret-door'){
        return NextResponse.redirect(new URL('/secret-door/add-project', request.url));
    }

    if(token && !pathname.includes('/secret-door')) {
        console.log('Token exists and pathname does not include /secret-door');
        // await signOut();
        (await cookies()).delete('authjs.session-token');
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|manifest.json|logo192.png|logo512.png).*)"],
    runtime: 'nodejs'
}