import Loader from '@/components/atoms/Loader/Loader'
import React from 'react'
import style from "./LoadingBar.module.css"

const LoadingBar = () => {
  return (
    <div className={style.Container} >
        <div><Loader letter="L" Image="Loader2" Color="#000" Rotate={0} Delay={200} /></div>
        <div><Loader letter="O" Image="Loader3" Color="#CC66F0"  Rotate={270} Delay={100} /></div>
        <div><Loader letter="A" Image="Loader4" Color="#fff"  Rotate={180}  Delay={200} /></div>
        <div><Loader letter="D" Image="Loader5" Color="#CC66F0" Rotate={0} Delay={100} /></div>
        <div><Loader letter="I" Image="Loader6" Color="#CC66F0" Rotate={180} Delay={200} /></div>
        <div><Loader letter="N" Image="Loader7" Color="#000" Rotate={270} Delay={100} /></div>
        <div><Loader letter="G" Image="Loader8" Color="#CC66F0" Rotate={90} Delay={200} /></div>
    </div>
  )
}

export default LoadingBar
