import React from "react";
import TextAbout from "../../ATOMS/TextAbout/TextAbout";

const About = () => {
  return (
    <div name="about" className="w-full bg-[#20201e]">
      <div className="">
        <TextAbout />
      </div>
      <div className="bg-[#20201e] flex justify-center mt-20" >
     <img src="/assets/wavy2.png" className=" overflow-hidden h-screen object-cover" alt="" />
     </div>
    </div>
  );
};

export default About;
