import React from "react";
import style from "./TextAbout.module.css";
import {Typewriter} from 'react-simple-typewriter'

const TextAbout = () => {
  
  return (
      <div className={style.AboutContainerText}>
        <div className="text-[22px] leading-7 text-white font-sora">
          Why Me?
        </div>
        <br />
        <div className="text-[30px]">
          I am
        </div>
        <div className={style.AboutTypingText}>
          <div className="font-justDance tracking-[10px] " >
          <Typewriter loop="false" words={['UI/UX DESIGNER','GRAPHIC DESIGNER']}
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
          />
          </div>
         
        </div>
        <div className="not-italic w-auto font-tex text-base leading-5 tracking-widest text-white">
        Hi there! I'm a multi-disciplinary designer with a passion for creating beautiful and functional designs. I've always been fascinated by the intersection of art and technology, and my diverse background in UI/UX design, graphic design, and architecture has given me a unique perspective on how design can shape the world around us. When I'm not designing, you can usually find me exploring new neighborhoods and taking in the sights and sounds of the city. I'm also a huge foodie, and love trying out new restaurants and experimenting with new recipes in my spare time. So whether you're looking for a stunning website, a captivating logo, or an innovative architectural design, I'm here to bring your vision to life!
        </div>
      </div>
  );
};

export default TextAbout;
