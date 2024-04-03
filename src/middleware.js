const { NextResponse } = require("next/server")

export function middleware(request){
const logintoken = request.cookies.get("logintoken")?.value
const loginUserNotAccessPaths = request.nextUrl.pathname == "/login" || request.nextUrl.pathname == "/signup"

if(loginUserNotAccessPaths){
    if(logintoken){
        return NextResponse.redirect(new URL("/dashboard",request.url))
    }else{
        if(!logintoken){
        return NextResponse.redirect(new URL("/login",request.url))
        }
    }
}
}

export const config={
    matcher:[
        "/dashboard",
    ]
}