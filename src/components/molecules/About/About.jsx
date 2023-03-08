import TextAbout from '@/components/atoms/TextAbout/TextAbout'
import React from 'react'
import style from "./About.module.css"

const About = () => {
  return (
    <div name="about" className="w-full h-screen pt-[100px] top-[100vh] " >
      <div><TextAbout/></div>
      <img className="absolute m-10 w-[884px] left-[556px] z-[3] " src="/assets/wavy.jpg" alt="akansha" />
    </div>
  )
}

export default About