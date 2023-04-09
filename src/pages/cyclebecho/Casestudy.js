import React from 'react'
import {motion} from "framer-motion";
import Link from 'next/link';


const Casestudy = () => {
  return (
    <>
    <div className='flex px-14 xl:px-40 justify-between font-tex sm:text-xl text-4xl pt-10 bg-[#F1D37D]' >
      <div className='relative top-3 ' >CYCLEBECHO.COM</div>
      <Link href="/" >
      <img src="/assets/phoneContactlogo.png" className=' ' alt="" />
      </Link>
      
    </div>
    <div className='h-screen w-full flex justify-center  bg-[#F1D37D]' >
         
         <embed src="/assets/casestudies/cyclebecho.pdf" className='w-[80vw] border-[10px] m-10 border-solid border-[#000]' type="" />
    </div>
    </>
  )
}

export default Casestudy