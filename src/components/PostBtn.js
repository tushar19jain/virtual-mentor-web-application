import { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
export default function PostBtn(){
    const [posts,writePost] = useState(false)
    return(
        <button className='bg-blue-500 p-6 lg:p-7 text-white rounded-full fixed bottom-10 right-10'>
            <FaPencilAlt />
        </button>
    )
}