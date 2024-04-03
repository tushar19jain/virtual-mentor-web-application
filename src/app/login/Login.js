"use client"
import { useState } from "react"
import Link from "next/link"
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { loginUser } from "../services/userServices";
import { useRouter } from "next/navigation";
const Login=()=>{
    const router = useRouter()
    const [password,showPassword] = useState(false)
    const [userDetails,setUserDetails] = useState({
        email:"",
        password:""
    })
    const handleForm=async(event)=>{
       event.preventDefault()
       if(userDetails.email != " " || userDetails.password != " "){
        const result = await loginUser(userDetails)
        if(result.status == true){
            toast(result.message)
            router.push('/dashboard')
        }
        else{
            toast(result.message)
        }
       }else{
         toast("Fields are empty")
       }
    }
        return(
            <div className='absolute inset-0 h-screen-max  w-full bg-gray-950 bg-[linear-gradient(to_right,#80808012_3px,transparent_3px),linear-gradient(to_bottom,#80808012_3px,transparent_3px)] bg-[size:45px_45px]'>
             <ToastContainer />
            <form action="#" onSubmit={handleForm} className='mx-4 backdrop-blur-xl lg:w-3/12 lg:mx-auto shadow-2xl shadow-violet-950 py-5 rounded-xl ring-1 px-5 my-24'>
                <h1 className='bg-gradient-to-tr from-gray-500 to-gray-300 bg-clip-text text-transparent font-bold text-3xl ' >Login</h1>
                <p className='bg-gradient-to-tr from-gray-500 to-gray-300 bg-clip-text text-transparent font-thin text-sm'>New to mentor <u><Link href={'/signup'}>signup</Link></u></p>
                <div className='flex flex-col gap-5 my-10'>
                <input
                type="email"
                placeholder="Your email"
                className="text-gray-500 border lg:w-12/12  rounded-md border-gray-500 bg-gray-950 px-3 py-3 "
                onChange={(event)=>{
                    setUserDetails({
                        email:event.target.value
                    })
                }}
                ></input>
                {password ? 
                <>      
                <input
                type="number"
                placeholder="Your password"
                className="text-gray-500 text-sm lg:w-12/12  border rounded-md border-gray-500 bg-gray-950 px-3 py-3"
                onChange={(event)=>{
                    setUserDetails({
                        ...userDetails,
                        password:event.target.value
                    })
                }}
                >    
                </input>
                <FaEyeSlash onClick={()=>showPassword(false)} className="text-xl text-slate-500 absolute right-10 top-[200px] cursor-pointer "/> 
                </>
                : 
                <>
                <input
                type="password"
                placeholder="Your password"
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
                onClick={()=>showPassword(true)} className="text-xl text-slate-500 absolute right-10 top-[200px] cursor-pointer "/>
                </>
                }
                <button type="submit" className='text-slate-300 bg-gradient-to-b from-violet-500 to-violet-950 px-8 py-3 lg:p-5 rounded-lg  flex items-center gap-3 mx-auto lg: my-5 shadow-2xl  '>Login</button>
                </div>
            </form>
            </div>
        )
}
export default Login