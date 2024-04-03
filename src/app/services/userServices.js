import { httpAxios } from "../helper/httpAxios"

export const verifyEmail = async(userData)=>{
    const result = await httpAxios
    .post("/api/auth/email",userData)
    .then((response)=>response.data)
    console.log("result",result)
    return result
}

export const createUser =async(userData)=>{
    const result = await httpAxios
    .post("/api/auth/signup",userData)
    .then((response)=>response.data)
    return result
}

export const loginUser=async(userDetails)=>{
    const result = await httpAxios
    .post("/api/auth/login",userDetails)
    .then((response)=>response.data)
    return result
}

export const fetchCurrentUser = async()=>{
    const result = await httpAxios
    .get("/api/current")
    .then((response)=>response.data)
    console.log("Result in services",result)
    return result
}

export const updateData = async(userDetails)=>{
    const result = await httpAxios
    .put("/api/update",userDetails)
    .then((response=>response.data))
    return result
}
export const updateMentorData = async(mentorDetails)=>{
    const result = await httpAxios
    .put("/api/update/mentor",userDetails)
    .then((response=>response.data))
    return result
}