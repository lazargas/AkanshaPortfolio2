import React, { useState, useEffect } from "react";
import style from "./LoadingBar.module.css";

const LoadingBar = ({Rotate,letter,Delay,Image,Color}) => {
  

  return (
    <>
    <body className={`relative inline-block animation-delay-${Delay}`}>
      <img src={`/assets/${Image}.png`} alt="" className={` w-[60px] h-[60px] rotate-[${Rotate}deg] `} />
      <span className={ `absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 not-italic font-normal text-5xl leading-[144px] text-[${Color}]`} >
        {letter}
      </span>
    </body>
    </>
  );
};

export default LoadingBar;
