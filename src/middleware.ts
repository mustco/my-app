import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./middlewares/withAuth";
export function mainMiddleware(req:NextRequest) {
    return NextResponse.next();
    // const isLogin = false;
    // if(isLogin) {
    //     return NextResponse.next();
    // }else {
    // return NextResponse.redirect(new URL("/auth/login", req.url))
    // }
}
export default withAuth(mainMiddleware, ["/profile",])
// export const config = {
//     matcher: ["/product", "/product/static", "/product/server", "/profile"]
// }