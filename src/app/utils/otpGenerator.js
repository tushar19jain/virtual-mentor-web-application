export const otpGenerator=()=>{
    const OTP = Math.floor(1000 + Math.random()*9999);
    return OTP
}