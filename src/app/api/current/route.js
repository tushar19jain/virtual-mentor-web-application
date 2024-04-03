import { userModel } from "@/app/models/userModel"
import { NextResponse } from "next/server"
import jwt from 'jsonwebtoken'
import dbConnect from "@/app/db/dbConnect";
dbConnect()
export async function GET(request){
    const logintoken = request.cookies.get("logintoken")?.value;
    const data = jwt.verify(logintoken,process.env.JWT_KEY)
    try {
        const user = await userModel.findById(data._id).select("-password")
        return NextResponse.json(user)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            status:false
        })
    }
}