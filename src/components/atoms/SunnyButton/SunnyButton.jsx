import React from 'react'
import style from "./SunnyButton.module.css"

const SunnyButton = () => {
    const arc = 120;
    const radius = 400;
    const s = "SKIP TO THE SUNNY SIDE";
    const characters = s.split('');
    
   
  return (
    
    <>
    <button className={style.Container} >
    <img src="/assets/circle.png" alt="" className="" />
    <div className={style.Text} >
      {
      characters.map((char,i)=>{
        <span style={`transform:rotate(${i*8.2}deg)`}>{char}</span>
      })
      }
    </div>
    </button>
    

    </>
  )
}

export default SunnyButton