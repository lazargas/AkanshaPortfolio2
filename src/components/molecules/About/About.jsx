import TextAbout from '@/components/atoms/TextAbout/TextAbout'
import React from 'react'
import style from "./About.module.css"

const About = () => {
  return (
    <div name="about" className="w-full h-screen z-[4] " >
      <div><TextAbout/></div>
      <img className="relative m-10 w-[884px] left-[600px] z-[4]" src="/assets/wavy.jpg" alt="akansha" />
    </div>
  )
}

export default About