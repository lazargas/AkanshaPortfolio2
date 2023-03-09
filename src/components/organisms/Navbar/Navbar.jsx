import NavButton from '@/components/atoms/NavButton/NavButton'
import React from 'react'
import style from "./Navbar.module.css"


const Navbar = () => {
  return (
    <>
    <div className={style.Container}>
        <div className="flex pt-7 ">
        <div className="relative left-[30px]">
            <NavButton text="Home" Name="intro"/>
        </div>
        <div className="relative left-[60px] ">
            <NavButton text="About" Name="about" />
        </div>
        <div className="relative left-[90px] ">
            <NavButton text="Skills" Name="skills" />
        </div>
        
        <div className="relative font-sora text-white left-[160px]">
            <img src="/assets/pnglogo.png" className='relative w-[160px] bottom-3' alt="" />
        </div>
        
        <div className="relative left-[260px] ">
            <NavButton text="Projects" Name="projects" />
        </div>
        <div className="relative left-[290px] ">
            <NavButton text="Contact" Name="contact" />
        </div>
        <div className="relative left-[320px] ">
        <button className='w-[162px] h-[39px] not-italic font-poppins font-extrabold pt-1 pl-2 pr-2 text-l leading-[30px] text-[#fff] rounded-[22px] border-[1.5px] border-solid border-[#CC66F0]' >
        DOWNLOAD CV
        </button>
        </div>
        

        </div>
        
    </div>
    </>
  )
}

export default Navbar