import React from "react";
import TextAbout from "../../ATOMS/TextAbout/TextAbout";

const About = () => {
  return (
    <div name="about" className="h-[210vh] w-full bg-[#20201e] relative  ">
      <div className="absolute">
        <TextAbout />
      </div>
      <div className="bg-[#20201e] flex justify-center mt-20 relative top-[115vh] " >
     <img src="/assets/wavy2.png" className=" overflow-hidden h-screen" alt="" />
     </div>
    </div>
  );
};

export default About;
