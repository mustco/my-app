import { getToken } from "next-auth/jwt";
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";
// tipe array string default kosong
export default function withAuth(middleware:NextMiddleware, requireAuth:string[]=[]) {
    return async(req:NextRequest,next:NextFetchEvent) => {
        const pathName = req.nextUrl.pathname;
        if(requireAuth.includes(pathName)) {
            const token = await getToken({
                req,
                secret:process.env.NEXTAUTH_SECRET
            });
            if(!token) {
                const url = new URL('/', req.url)
                return NextResponse.redirect(url)
            }
            return middleware(req,next)
        }
    }
}