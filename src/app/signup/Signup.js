"use client"
import Link from "next/link"
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react"
import { FaRegEye } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { validateUserCredentials } from "../controllers/validateUserCredentials";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { createUser, verifyEmail } from "../services/userServices";

const Signup=()=>{
    const [mentorMark,setMentorMark] = useState(false)
    const [studentMark,setStudentMark] = useState(false)
    const [userDetails,setUserDetails] = useState({
        role:"",
        name:" ",
        email:" ",
        password:" "
    })
    console.log(userDetails)
    const [password,showPassword] = useState(false)
    console.log(userDetails.name)
    const handleForm=async(event)=>{
       event.preventDefault()
       const  result = await validateUserCredentials(userDetails)
       console.log(result)
       if(!result){
        toast("Fields are empty !")
       }else{
        const result = await createUser(userDetails)
        if(result == false){
            toast("Somthing went wrong!")
        }else{
            toast("Acoount created successfully")
        }
       }
    }
        return(
            <div className='absolute inset-0 h-screen-max  w-full bg-gray-950 bg-[linear-gradient(to_right,#80808012_3px,transparent_3px),linear-gradient(to_bottom,#80808012_3px,transparent_3px)] bg-[size:45px_45px]'>
            <ToastContainer />
            <form onSubmit={handleForm} action="#" className='mx-4 backdrop-blur-xl lg:w-3/12 lg:mx-auto shadow-2xl shadow-violet-950 py-3 rounded-xl ring-1 px-5 my-10'>
                <h1 className='bg-gradient-to-tr from-gray-500 to-gray-300 bg-clip-text text-transparent font-bold text-xl '>Signup</h1>
                <p className='bg-gradient-to-tr from-gray-500 to-gray-300 bg-clip-text text-transparent font-thin text-sm'>Already a member <u><Link href={'/login'}>login</Link></u></p>
                <div className='flex flex-col gap-5 my-10'>
                <section className='p-3 flex flex-col gap-4 cursor-pointer items-center justify-between'>
                    {studentMark ?
                    <>
                    <p 
                        onClick={()=>{
                        setUserDetails({
                            ...userDetails,
                            role:"student"
                        })
                    }}
                    className='bg-gray-800 w-9/12 p-4 text-[12px] text-slate-400  rounded-md ' >I am a student</p>
                     <IoIosCheckmarkCircle className='text-2xl text-green-500 absolute right-20  top-[125px]' />
                    </>
                    :
                    <>
                    <p 
                        onClick={()=>{
                        setUserDetails({
                            ...userDetails,
                            role:"student"
                        })
                        setMentorMark(false)
                        setStudentMark(true)
                    }}
                    className='bg-gray-800 w-9/12 p-4 text-[12px] text-slate-400  rounded-md ' >I am a student</p>
                    </>
                    }
                    {mentorMark ?
                    <>
                        <p
                    onClick={()=>{
                        setUserDetails({
                            ...userDetails,
                            role:"mentor"
                        })
                    }}
                    className='bg-gray-800  w-9/12 p-4 text-[12px] text-slate-400 rounded-md '>I am a mentor </p> 
                    <IoIosCheckmarkCircle className='text-2xl text-green-500 absolute right-20 top-48' />
                    </>
                    :
                    <p
                    onClick={()=>{
                        setUserDetails({
                            ...userDetails,
                            role:"mentor"
                        })
                        setStudentMark(false)
                        setMentorMark(true)
                    }}
                    className='bg-gray-800  w-9/12 p-4 text-[12px] text-slate-400 rounded-md '>I am a mentor</p>
                    }                
                </section>
                <input
                type="text"
                placeholder="Full name"
                className="text-gray-500 border text-sm lg:w-12/12 rounded-md border-gray-500 bg-gray-950 px-3 py-3 "
                onChange={(event)=>{
                    setUserDetails({
                        ...userDetails,
                        name:event.target.value
                    })
                }}
                ></input>
                <input
                type="email"
                placeholder="Your email"
                className="text-gray-500 border text-sm lg:w-12/12  rounded-md border-gray-500 bg-gray-950 px-3 py-3 "
                onChange={(event)=>{
                    setUserDetails({
                        ...userDetails,
                        email:event.target.value
                    })
                }}
                ></input>
                <IoMail  className="text-xl text-slate-500 absolute right-10 top-[340px] cursor-pointer " />
                {password ? 
                <>      
                <input
                type="number"
                placeholder="Create a strong password"
                className="text-gray-500 text-sm lg:w-12/12  border rounded-md border-gray-500 bg-gray-950 px-3 py-3"
                onChange={(event)=>{
                    setUserDetails({
                        ...userDetails,
                        password:event.target.value
                    })
                }}
                >    
                </input>
                <FaEyeSlash onClick={()=>showPassword(false)} className="text-xl text-slate-500 absolute right-10 top-[405px] cursor-pointer "/> 
                </>
                : 
                <>
                <input
                type="password"
                placeholder="Create a strong password"
                className="text-gray-500  lg:w-12/12 text-sm border rounded-md border-gray-500 bg-gray-950 px-3 py-3"
                onChange={(event)=>{
                    setUserDetails({
                        ...userDetails,
                        password:event.target.value
                    })
                }}
                >    
                </input>
                <FaRegEye 
                onClick={()=>showPassword(true)} className="text-xl text-slate-500 absolute right-10 top-[405px] cursor-pointer "/>
                </>
                }
                <button type="submit" className='text-slate-300 text-sm bg-gradient-to-b from-violet-500 to-violet-950 px-4 py-4 lg:p-5 rounded-lg  flex items-center gap-3 mx-auto lg:my-5 shadow-2xl  '>Verify & Signup</button>
                </div>
            </form>
            </div>
        )
    }
export default Signup