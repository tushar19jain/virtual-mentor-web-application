import dbConnect from "@/app/db/dbConnect";
import { userModel } from "@/app/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'
dbConnect()
export async function POST(request){
    try {
        const {role,name,email,password} = await request.json() 
        const user = new userModel({    
            role,
            name,
            email,
            password
        }) ; 
        try {

            user.password = await bcrypt.hash(user.password,parseInt(process.env.BCRYPT_SALT))
            const createdUser  = await user.save();
            console.log(createdUser)
            return NextResponse.json({
                status:true
            })
        } catch (error) {
            console.log(error)
            return NextResponse.json({
                status:false
        })
    }
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            status:"false"
        })
    }
}