import Link from "next/link"
import { TiThMenu } from "react-icons/ti";
const Navbar=()=>{
    return(
        <nav className='flex justify-between px-5 lg:px-20 py-8'>
            <Link href={"#"} ><h1 className='text-xl font-extrabold bg-gradient-to-tr from-gray-300 to-gray-500 bg-clip-text text-transparent  ' >Mentor</h1></Link> 
            <div>
               <ul className='hidden lg:flex gap-20 bg-gradient-to-tr from-gray-300 to-gray-500 bg-clip-text text-transparent '>
                    <Link href={"#"}>Become a mentor</Link>
                    <button>Login</button>
                    <button>Signup</button>
                </ul>
                <button className='text-slate-500 text-3xl lg:hidden' ><TiThMenu /></button>
            </div>
        </nav>
    )
}   
export default Navbar