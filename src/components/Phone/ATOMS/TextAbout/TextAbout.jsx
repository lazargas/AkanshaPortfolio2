import React from "react";
import style from "./TextAbout.module.css";
import {Typewriter} from 'react-simple-typewriter'

const TextAbout = () => {



  return (
    <div className="" >
      <div className="absolute pl-8 pt-5 pb-5 ">
        <div className="absolute w-[345px] h-[117px] not-italic font-semibold text-[22px] leading-7 text-white font-sora top-5 text-left  ">
          WHY ME ?
        </div>
        <div className="absolute w-[345px] top- h-[117px] not-italic font-semibold text-[35px] leading-7 text-white text-left  top-[135px] font-sora ">
          I am 
        </div>
        <div className="absolute font-grand tracking-[5px] not-italic font-semibold w-auto h-[145px] text-[58px] text-[#CC66F0] text-left left-7 top-40">
          <Typewriter loop="false" words={['UI/UX DESIGNER','GRAPHIC DESIGNER']} 
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
          />
        </div>
        <div className="absolute w-[350px] h-[178px]  not-italic font-sora text-base leading-5 text-white top-96 z-[3] text-left  ">
        Hi there! I'm a multi-disciplinary designer with a passion for creating beautiful and functional designs. I've always been fascinated by the intersection of art and technology, and my diverse background in UI/UX design, graphic design, and architecture has given me a unique perspective on how design can shape the world around us. When I'm not designing, you can usually find me exploring new neighborhoods and taking in the sights and sounds of the city. I'm also a huge foodie, and love trying out new restaurants and experimenting with new recipes in my spare time. So whether you're looking for a stunning website, a captivating logo, or an innovative architectural design, I'm here to bring your vision to life!
        </div>
      </div>
      
    </div>
    
  );
};

export default TextAbout;
