"use client"
import { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { updateData } from "../services/userServices";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function ProfileCard({userId,name,headline,organization,yearOfexp,qualification,following,role}){
    const [hidden,setShowNavHidden] = useState("hidden")
    const [dialog,openDialog] = useState(false)
    const [mentorDialog,openMentorDialog] = useState(false)
    const [userUpdates,setUserUpdate] =  useState({
        id:"",
        headLine:"",
        qualiFication:"",
    })
    const [mentorUpdates,setMentorUpdate] =  useState({
        id:"",
        headLine:"",
        qualiFication:"",
        yearOfexp:"",
        organization:"",
    })
    console.log(userUpdates);
    console.log("User id in profile card:",userId)
    const handleUpdate=async(event)=>{
        event.preventDefault();
        if(userUpdates.id == "" || userUpdates.headLine == " " || userUpdates.qualiFication == ""){
            toast("Can't update data")
        }else{
            const result = await updateData(userUpdates);
            if(!result){
                toast("Can't update the data !")
            }else{
               toast("Updated!!") 
            }
        }
    }
    const handleMentorUpdate=async(event)=>{
        event.preventDefault();
        const result = await updateData(userUpdates);
        if(!result){
            toast("Can't update the data !")
        }else{
            toast("Updated!!") 
            }
        }
        
    if(role == "student")
    return(
    <div>
        <TiThMenu 
        onClick={()=>{
          setShowNavHidden("flex") 
        }}
        className="lg:hidden text-3xl"/>
    <ToastContainer />
    <div className={`${hidden} lg:flex bg-white flex-col items-center`}>
    <div className=" p-10 lg:p-5 flex flex-col gap-3">
        <h1 className="text-3xl lg:text-2xl">{name}</h1>
        <p className="text-[14px] text-gray-600">{headline}</p>
        <div className="flex gap-5 my-5">
            <p className="px-4 py-2 text-sm  bg-blue-300 rounded-full text-blue-950">{role}</p>
            <p className="px-4 py-2  text-sm border-2 border-blue-300 rounded-full text-midnightblue">following: {following}</p>
        </div>
        <h1 className="text-3xl lg:text-2xl">Education</h1>
        <p className="text-[14px] text-gray-600">Highest qualification: {qualification} </p>
        <button 
        onClick={()=>{
            openDialog(true)
        }}
        className="my-10 bg-blue-800  p-2 rounded-full text-white">Edit profile</button>
        <button className=" bg-[#121212] w-full mx-auto p-2  rounded-full text-white">Logout </button>
        {dialog?
        <div className="bg-white absolute border w-[100%] py-5 px-5 text-sm rounded-lg shadow-xl shadow-gray-300">
        <IoClose onClick={()=>{
            openDialog(false)
        }} className="text-2xl" />
            <form onSubmit={handleUpdate} className="flex flex-col lg:top-60 lg:left-30 top-50 my-10 gap-10">
                <input 
                onChange={(event)=>{
                    setUserUpdate({
                        ...userUpdates,
                        headLine:event.target.value,
                        id:userId
                    })
                }}
                 className="p-3  border" type="text" placeholder="Write your headline"></input>
                <input
                onChange={(event)=>{
                    setUserUpdate({
                        ...userUpdates,
                        qualiFication:event.target.value
                    })
                }}
                className="p-3 border " type="text" placeholder="Tell us your qualification"></input>
                <button type="submit" className="bg-blue-900 w-full text-white p-2 rounded-full">Save changes</button>
            </form>
        </div>
        :
        <div>

        </div>
        }
    </div>
    </div>
    </div>
  )
  if(role == "mentor"){
    return(
        <div>
        <TiThMenu 
        onClick={()=>{
          setShowNavHidden("flex") 
        }}
        className="lg:hidden text-3xl"/>
     <div className={`${hidden}lg:flex flex-col  mt-5 items-center`}>
    <div className=" p-5 flex flex-col gap-3">
        <h1 className="text-3xl"><b>{name}</b></h1>
        <p className="text-[14px] text-gray-500">{headline}</p>
        <div className="flex gap-5">
            <p className="p-3 text-sm  bg-blue-300 rounded-full text-blue-950">{role}</p>
            <p className="p-3 text-sm border-2 border-blue-300 rounded-full text-midnightblue">followers: {following} </p>
        </div>
        <div className="my-4">
        <h1 className="text-xl">Education</h1>
        <p className="text-[13px] text-gray-500">Highest qualification: <b>{qualification}</b> </p>
        </div>
        <div className="my-4">
        <h1 className="text-xl">Experience</h1>
        <p className="text-[13px] text-gray-500">Current oraganization: <b> {organization} </b></p>
        <p className="text-[13px] text-gray-500">Years of experience: <b> {yearOfexp} Years</b></p>
        </div>
        <button 
        onClick={()=>{
            openMentorDialog(true)
        }}
        className="my-10 bg-blue-800  w-full p-2 rounded-full text-white">Edit profile</button>
        {mentorDialog?
        <div className="bg-white absolute border w-[100%] py-5 px-5 text-sm rounded-lg shadow-xl shadow-gray-300">
        <IoClose onClick={()=>{
            openMentorDialog(false)
        }} className="text-2xl" />
            <form onSubmit={handleMentorUpdate} className="flex text-sm flex-col lg:top-60 lg:left-30 top-50 my-10 gap-10">
                <input 
                onChange={(event)=>{
                    setMentorUpdate({
                        ...mentorUpdates,
                        headLine:event.target.value,
                        id:userId
                    })
                }}
                 className="p-3 text-sm border" type="text" placeholder="Write your headline"></input>
                <input
                onChange={(event)=>{
                    setMentorUpdate({
                        ...mentorUpdates,
                        qualiFication:event.target.value
                    })
                }}
                className="p-3 border text-sm" type="text" placeholder="Where are you currently working ?"></input>
                <input
                onChange={(event)=>{
                    setMentorUpdate({
                        ...mentorUpdates,
                        yearOfexp:event.target.value
                    })
                }}
                className="p-3 border text-sm" type="text" placeholder="Tell us your qualification"></input>
                <input
                onChange={(event)=>{
                    setMentorUpdate({
                        ...mentorUpdates,
                        organization:event.target.value
                    })
                }}
                className="p-3 border text-sm" type="text" placeholder="Year of experience"></input>

                <button type="submit" className="bg-blue-900 w-full text-white p-2 rounded-full">Save changes</button>
            </form>
        </div>
        :
        <div>

        </div>
        }
        <button className=" bg-[#121212] w-full p-2  rounded-full text-white">Logout </button>
    </div>
    </div>
    </div>
      )
  }
}