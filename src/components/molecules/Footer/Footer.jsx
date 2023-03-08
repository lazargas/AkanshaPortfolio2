import React from 'react'
import style from "./Footer.module.css"
import {AiFillLinkedin} from "react-icons"
import Contact from '@/components/atoms/Contact/Contact'
import Socials from '@/components/atoms/Socials/Socials'

const Footer = () => {
  return (
    <>
        <div name="contact" className="w-full h-[40vh] bg-[#000] top-[400vh] mt-24">
            <div className='relative p-5  h-[97px] w-[500px] left-[129px] not-italic font-sora text-xl leading-[160%] text-white' >
            "Contact me if you want to elevate your brand's design game. And hey, if you're in the mood for a latte, I'm down for that too" ☕
            </div>
            <div className="relative w-[300px] left-[1200px] bottom-[175px] ">
              <img src="/assets/logo.png" alt="" />
            </div>
            <div className="relative bottom-[200px] w-[300px] left-[1100px] ">
              <Contact/>
            </div>
            <div className="relative bottom-[275px] w-[300px] left-[129px] ">
              <Socials/>
            </div>
        </div>
        <div className=" flex gap-[69rem] p-5 h-[10vh] bg-[#3E3A3A] top-[472vh] " >
        <div className="relative left-[120px] not-italic font-normal text-base text-white font-sora">
            Copyright Reserved
        </div>
        <div className=' h-[26px] not-italic font-sora font-normal text-base text-white flex-none order-1 grow-0  left-[1280px]  ' >
              Akansha Singh
        </div>
        </div>
    </>
  )
}

export default Footer