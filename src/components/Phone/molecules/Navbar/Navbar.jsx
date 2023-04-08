import React, { useState,useContext } from 'react'
import { AkanshaContext } from '@/Context/Akansha';

const Navbar = () => {
 
  const {open,setOpen} = useContext(AkanshaContext);
  const handleclick = () => {
    if(open)
    setOpen(false)
    else
    setOpen(true)
  }
  console.log(open);
  return (
    <div className='fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#20201e] z-[10] ' >
    <div className=' left-[18px] top-[22px]'>
        <img src="/assets/logo2.png" className=' w-[95px] h-[41px]' alt="" />
    </div>
    <div className=" top-[34.5px] flex-end">
        <button onClick={handleclick}>
        <img src=" /assets/hamburger.png" className=' w-[21px] h-3'  alt="" />
        </button>
    </div>
     

</div>
  )
}

export default Navbar