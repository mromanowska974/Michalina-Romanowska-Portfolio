import { NextResponse } from "next/server";

const protectedRoutes = [
    '/secret-door/questions',
    '/secret-door/edit-projects',
    '/secret-door/add-project'
];

export default async function middleware(request) {
    const token = request.cookies.get('authjs.session-token')?.value;

    const isProtected = protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route));

    if(!token && isProtected) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|manifest.json|logo192.png|logo512.png).*)"],
}