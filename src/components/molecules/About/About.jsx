import TextAbout from '@/components/atoms/TextAbout/TextAbout'
import React from 'react'
import style from "./About.module.css"

const About = () => {
  return (
    <div name="about" className={style.AboutContainer} >
      <TextAbout/>
      <div className={style.AboutImageContainer}>
        <img className="" src="/assets/wavy.jpg" alt="akansha" />
      </div>
    </div>
  )
}

export default About