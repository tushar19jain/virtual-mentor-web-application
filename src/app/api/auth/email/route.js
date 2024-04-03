import { mailSender } from '@/app/utils/mailSender';
import { NextResponse } from 'next/server';
export async function POST(request){
    try {
        const {email} = await request.json();
        const otp = await mailSender(email);
        console.log("otp",otp)
        return NextResponse.json({
            message:otp
        })
    }
    catch(e){
        return NextResponse.json({
            status:false,
            message:"Internal server error!"
        })
    }
}