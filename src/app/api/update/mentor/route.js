import dbConnect from "@/app/db/dbConnect"
import { userModel } from "@/app/models/userModel"
import { NextResponse } from "next/server"

export async function PUT(request){
    dbConnect()
    const {id,headLine,qualiFication,yearOfexp,organization} = await request.json()
    try {
        const update = await userModel.updateOne({_id:id},{headline:headLine,highestQualification:qualiFication,currentOrganization:organization,yearOfExp:yearOfexp});
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