import { userModel } from "@/app/models/userModel"
import { NextResponse } from "next/server"
import jwt from 'jsonwebtoken'
import dbConnect from "@/app/db/dbConnect"
export async function  POST(request){
    const {email,password} = await request.json()
    console.log("Email:",email,"Password:",password)
    try {
        await dbConnect()
        const user = await userModel.findOne({
            email:email
        })
        console.log(user)
        if(user == null){
            return NextResponse.json({
                status:false,
                message:"User not found!"
            })
        }
        console.log("User found")
        const token = jwt.sign({
                _id:user._id,
                name:user.name
            },process.env.JWT_KEY)
            console.log(token)
        const response = NextResponse.json({
            message:"Login success",
            status:true
        })
        response.cookies.set("logintoken",token,{
            expiresIn:"1d",
            httpOnly:false
        })
        return response
    } catch (err) {
        console.log(err)
        return NextResponse.json({
            status:404,
            message:"User not found"
        })
    }
}