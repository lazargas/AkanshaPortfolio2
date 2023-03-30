import React from 'react'
import {motion} from "framer-motion";


const Casestudy = () => {
  return (
    <>
    <div className='flex px-14 xl:px-40 justify-between font-grand text-4xl pt-10 bg-[#F1D37D]' >
      <div className='relative top-3 ' >CYCLEBECHO.COM</div>
      <img src="/assets/phoneContactlogo.png" className=' ' alt="" />
    </div>
    <div className='h-screen w-full flex justify-center  bg-[#F1D37D]' >
         
         <embed src="/assets/casestudies/cyclebecho.pdf" className='w-[80vw] border-[10px] m-10 border-solid border-[#000]' type="" />
    </div>
    </>
  )
}

export default Casestudy