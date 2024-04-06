import nodemailer from 'nodemailer'
import { otpGenerator } from "./otpGenerator";
export async function mailSender(email){
    const otp =  await otpGenerator()
    console.log("otp after generation",otp)
    const transporter =  nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        auth:{
            user:"process.env.USER",
            pass:"process.env.PASS"
        }
    })
    const mailOption={
        from:'jaint381@gmail.com',
        to: `${email}`,
        subject:"Verify your Hop.Ly account",
        text:`Your otp is: ${otp}`
    }
    try {
         transporter.sendMail(mailOption, function (err, info) {
             if (err) {
                 console.log(err);
             } else {
                 console.log("Info",info);
                 console.log("OTP in transporter", otp);
                 return otp;
             }
         })  
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:"Can't send OTP to your mail address"
        })
    }
}