import React from 'react'
import style from "./SunnyButton.module.css"

const SunnyButton = () => {
    const arc = 120;
    const radius = 400;
    const text = "COLLECTIONS BY PEOPLE";
    const characters = text.split('');
    const degree = arc / characters.length;
   
  return (
    <>
    <div className={style.Container} >
    <div className={style.Ellipse1}> </div>
    <div className={style.Text} >SKIP TO THE SUNNY SIDE
    </div>
    </div>
    

    </>
  )
}

export default SunnyButton