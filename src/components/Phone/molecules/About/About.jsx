import React from "react";
import TextAbout from "../../ATOMS/TextAbout/TextAbout";

const About = () => {
  return (
    <div name="about" className="h-[210vh] w-full bg-[#20201e] relative  ">
      <div className="absolute">
        <TextAbout />
      </div>
      <div className="bg-[#20201e] mt-20 absolute top-[105vh] " >
     <img src="/assets/wavy2.png" className="w-[884px] overflow-hidden h-screen" alt="" />
     </div>
    </div>
  );
};

export default About;
