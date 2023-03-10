import Hey from '@/components/atoms/Hey/Hey'
import Hey2 from '@/components/atoms/Hey/Hey2'
import SunnyButton from '@/components/atoms/SunnyButton/SunnyButton'
import Text1 from '@/components/atoms/Text1/Text1'
import React from 'react'
import style from "./Intro.module.css"


const Intro = () => {
  return (
    <>
    <div className="w-full h-screen  bg-[url('/assets/background1.jpg')] " name="intro" >
        <div className='absolute left-[180px]' >
          <Hey2/>
        </div>
        <div className={style.Rectangle15}>
          <img src="/assets/intro2.gif" className='w-[220px] h-[96px] rounded-[30px]'/>
        </div>
        <div className={style.Text1} >
          <Text1/>
        </div>
        <div className={style.SunnyButton}>
          <SunnyButton/>
        </div>
    </div>
    </>
  )
}

export default Intro