import dbConnect from "@/app/db/dbConnect"
import { userModel } from "@/app/models/userModel"
import { NextResponse } from "next/server"

export async function PUT(request){
    dbConnect()
    const {id,headLine,qualiFication} = await request.json()
    console.log(id,headLine,qualiFication)
    try {
        const update = await userModel.updateOne({_id:id},{headline:headLine,highestQualification:qualiFication});
        if(!update){
            return NextResponse.json({
                status:false
            })
        }else{
            return NextResponse.json({
                status:true
            })
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            status:false
        })
    }
}