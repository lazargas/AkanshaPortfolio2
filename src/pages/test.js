import React from 'react'
import ReactCurvedText from "react-curved-text";
import style from "../styles/test.module.css";

const SunnyButton = () => {
    const arc = 120;
    const radius = 400;
    const s = "SKIP TO THE SUNNY SIDE";
    const characters = s.split('');
    
   
  return (
    
    <>
    <button className='w-full h-[85vh] bg-[#000] circle ' >
    <div className={style.ele} >
        
        <div id="sabpe" >S</div>
        <div className='rotate-[34deg]' id="sabpe" >K</div>
        <div className='rotate-[51.42deg]' id="sabpe">I</div>
        <div className='rotate-[68.56deg]' id="sabpe">P</div>
        <div className='rotate-[85.7deg]' id="sabpe" > </div>
        <div className='rotate-[102.84deg]' id="sabpe">T</div>
        <div className='rotate-[119deg]' id="sabpe">O</div>
        <div className='rotate-[136deg]' id="sabpe"> </div>
        <div className='rotate-[153deg]' id="sabpe">T</div>
        <div className='rotate-[170deg]' id="sabpe">H</div>
        <div className='rotate-[187deg]' id="sabpe">E</div>
        <div className='rotate-[204deg]' id="sabpe"> </div>
        <div className='rotate-[221deg]' id="sabpe">S</div>
        <div className='rotate-[238deg]' id="sabpe">U</div>
        <div className='rotate-[255deg]' id="sabpe">N</div>
        <div className='rotate-[272deg]' id="sabpe">N</div>
        <div className='rotate-[289deg]' id="sabpe">Y</div>
        <div className='rotate-[306deg]' id="sabpe"> </div>
        <div className='rotate-[323deg]' id="sabpe">S</div>
        <div className='rotate-[340deg]' id="sabpe">I</div>
        <div className='rotate-[357deg]' id="sabpe">D</div>
        <div className='rotate-[360deg]' id="sabpe">E</div>
        
    </div>
    </button>
    

    </>
  )
}

export default SunnyButton