"use client"
import ProfileCard from "@/app/dashboard/ProfileCard";
import { useEffect, useState } from "react";
import { fetchCurrentUser } from "../services/userServices";
import Posts from "@/components/Posts";
import PostBtn from "@/components/PostBtn";
import SuggestionBox from "@/components/SuggestionBox";
export default function Dashboard(){
    const [userData,setUserData] =  useState({
        id:"",
        name:"",
        following:"",
        role:"",
        headline:"",
        qualification:"",
        organization:" ",
        yearOfexp:""
        
    })
    console.log(userData)
    useEffect(()=>{
        const data = fetchCurrentUser();
        data.then(result=>{
            setUserData({
                name:result.name,
                following:result.following,
                role:result.role,
                id:result._id,
                headline:result.headline,
                organization:result.currentOrganization,
                qualification:result.highestQualification,
                yearOfExp:result.yearOfExp
            })
        })
    })
    return(
        <div className="flex">
            <div className='sideNav p-3 lg:border-r-2 border-gray-200 bg-white h-[1200px] fixed top-0 lg:w-72'>
               <ProfileCard userId={userData.id} name={userData.name} headline={userData.headline} yearOfexp={userData.yearOfexp} organization={userData.organization} role ={userData.role} qualification={userData.qualification} following={userData.following} />
            </div>
            <div className='feed h-96 w-full my-5' >
                <div>
                    <Posts />
                    <Posts />
                    <Posts />
                    <Posts />
                    <PostBtn />
                </div>
            </div>
            <div className='message'>
                <SuggestionBox />
            </div>
        </div>
    )
}