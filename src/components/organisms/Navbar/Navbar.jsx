import NavButton from '@/components/atoms/NavButton/NavButton'
import React from 'react'
import style from "./Navbar.module.css"


const Navbar = () => {
  return (
    <>
    <div className={style.Container}>
        <div className="flex">
        <div className="relative left-[30px] top-5">
            <NavButton text="Home" Name="intro"/>
        </div>
        <div className="relative left-[60px] top-5">
            <NavButton text="About" Name="about" />
        </div>
        <div className="relative left-[90px] top-5">
            <NavButton text="Skills" Name="skills" />
        </div>
        
        <div className="relative font-sora text-white top-7 left-[180px]">
            <img src="/assets/pnglogo.png" className='relative w-[140px] bottom-3' alt="" />
        </div>
        
        <div className="relative left-[270px] top-5">
            <NavButton text="Projects" Name="projects" />
        </div>
        <div className="relative left-[300px] top-5">
            <NavButton text="Contact" Name="contact" />
        </div>
        <div className="relative left-[350px] top-5">
        <button className='w-[162px] h-[39px] not-italic bg-white font-poppins font-extrabold pt-1 pl-2 pr-2 text-l leading-[30px] text-[#000] rounded-[22px] border-[1.5px] border-solid border-[#CC66F0]' >
        DOWNLOAD CV
        </button>
        </div>
        

        </div>
        
    </div>
    </>
  )
}

export default Navbar