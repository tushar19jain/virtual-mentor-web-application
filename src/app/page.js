import Navbar from "@/components/Navbar";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";
export default function Home() {
  return (
    <div className='absolute inset-0 h-screen-max  w-full bg-gray-950 bg-[linear-gradient(to_right,#80808012_3px,transparent_3px),linear-gradient(to_bottom,#80808012_3px,transparent_3px)] bg-[size:45px_45px]' >
      <Navbar />
      <section>
        <h1 className=' text-5xl lg:text-6xl lg:text-center mt-8 leading-tight font-bold w-10/12 lg:w-8/12 mx-auto bg-gradient-to-tr from-gray-500 to-gray-300 bg-clip-text text-transparent' >Learn & grow with help from <span>world-class</span> mentors</h1>
       <Link href={'/signup'} ><button className='text-slate-300 bg-gradient-to-b from-violet-500 to-violet-950 px-4 py-4 lg:p-5 rounded-lg  shadow-violet-900 flex items-center gap-3 mx-auto my-5 shadow-2xl  ' >Get started <FaLongArrowAltRight  className='text-2xl'/> </button></Link> 
       <Link href={'/login'} ><button className='text-slate-300 bg-gradient-to-b from-violet-500 to-violet-950 px-4 py-4 lg:p-5 rounded-lg  shadow-violet-900 flex items-center gap-3 mx-auto my-5 shadow-2xl  ' >Login here<FaLongArrowAltRight  className='text-2xl'/> </button></Link> 
      </section>
      <section className="my-20">
        <h2 className=' text-xl lg:text-2xl font-semibold text-center bg-gradient-to-tr from-gray-500 to-gray-300 bg-clip-text text-transparent ' >Certified mentors from</h2>
      </section>
    </div>
  );
}
