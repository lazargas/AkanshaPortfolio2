import VerticalText from "@/components/atoms/VerticalText/VerticalText";
import React from "react";
import style from "./Skills.module.css";

const Skills = () => {
  return (
    <>
      <div name="skills" className="flex gap-[2rem] w-full h-screen  mt-[60vh]">
      {/* <div class="absolute flex overflow-x-hidden">
      <div class="animate-marquee whitespace-nowrap">
      <div className="not-italic font-sora text-8xl leading-[121px] text-[#F1D37D]">SKILLS</div>
          <div className="not-italic font-sora text-8xl leading-[121px] text-[#F1D37D] opacity-80">SKILLS</div>
          <div className="not-italic font-sora text-8xl leading-[121px] text-[#F1D37D] opacity-60">SKILLS</div>
          <div className="not-italic font-sora text-8xl leading-[121px] text-[#F1D37D] opacity-40">SKILLS</div>
          <div className="not-italic font-sora text-8xl leading-[121px] text-[#F1D37D] opacity-20">SKILLS</div>
      </div>
      </div> */}
        
        
        <div>
        <div className="relative flex-[2] right-[22px] ">
          
          <div className="relative right-[80px]  top-[100px] ">
            <VerticalText text="3D VIZUALIZATION" />
          </div>
          <div className="relative right-[35px]  ">
            <VerticalText text="PHOTOSHOP" />
          </div>
          <div className="relative right-[-10px] top-[60px] ">
          <div className='absolute w-[550px] pl-3  h-12 not-italic font-semibold text-4xl leading-[45px] text-[#cc66f0] -rotate-90 font-tex z-[1] bg-[#20201e] hover:text-5xl hover:z-[2] hover:h-12 hover:text-[#cc66f0] hover:transition-all hover:duration-[0.4s] hover:ease-[ease]'  >
           GRAPHIC DESIGNING
          </div>
          </div>
          <div className="relative right-[-55px] top-[-70px] ">
            <VerticalText text="FIGMA" />
          </div>
          <div className="relative right-[-100px] top-[90px] ">
            <VerticalText text="ADOBE XD" />
          </div>
          <div className="relative right-[-145px] top-[-20px]">
            <VerticalText text="ILLUSTRATOR" />
          </div>
          <div className="relative right-[-190px] top-[-40px] ">
            <VerticalText text="INDESIGN" />
          </div>
          <div className="relative right-[-235px] top-[60px]">
            <VerticalText text="ARCHITECTURE" />
          </div>
          <div className="relative right-[-280px] top-[150px]">
            <VerticalText text="HTML" />
          </div>
          <div className="relative right-[-325px] top-[100px]">
          <div className='absolute w-[550px] pl-3 h-12 not-italic font-semibold text-4xl leading-[45px] text-[#cc66f0] -rotate-90 font-tex z-[1] bg-[#20201e] hover:text-5xl hover:z-[2] hover:h-12 hover:text-[#cc66f0] hover:transition-all hover:duration-[0.4s] hover:ease-[ease]'  >
           UI/UX DESIGNING
          </div>
          </div>
          <div className="relative right-[-370px]  top-[10px]">
            <VerticalText text="REVIT" />
          </div>
          <div className="relative right-[-415px] top-[60px]">
            <VerticalText text="FILMORA" />
          </div>
          <div className="relative right-[-460px]  top-[-50px]">
            <VerticalText text="AFTER EFFECTS" />
          </div>
          <div className="relative right-[-505px] top-[-70px]">
            <VerticalText text="CSS" />
          </div>
          <div className="relative right-[-550px] top-[60px]">
            <VerticalText text="WIREFRAMING" />
          </div>
          <div className="relative right-[-595px]  top-[-20px]">
            <VerticalText text="PROTOTYPING" />
          </div>
          <div className="relative right-[-640px] top-[10px]">
          <div className='absolute pl-3 w-[550px]  h-12 not-italic font-semibold text-4xl leading-[45px] text-[#F1D37D] -rotate-90 font-tex z-[1] bg-[#20201e] hover:text-5xl hover:z-[2] hover:h-12 hover:text-[#cc66f0] hover:transition-all hover:duration-[0.4s] hover:ease-[ease]'  >
           MORE...
          </div>
          </div>
          <img  className="relative w-[47rem] h-[85vh] top-[50px] left-[175px]" src="/assets/skill.jpg" alt="" />
        </div>
        
        </div>
        <marquee direction="up" className=" font-poppins w-[385px] relative h-[600px] flex-[2] left-[250px]">
          <div className="not-italic font-[800] font-poppins text-8xl p-2 leading-[144px] text-[#F1D37D]">SKILLS</div>
          <div className="not-italic font-[800] font-poppins text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">SKILLS</div>
          <div className="not-italic font-[800] font-poppins text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">SKILLS</div>
          <div className="not-italic font-[800] font-poppins text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">SKILLS</div>
          <div className="not-italic font-[800] font-poppins text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">SKILLS</div>
          <div className="not-italic font-[800] font-poppins text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">SKILLS</div>
        </marquee>
        
        
        
      </div>
    </>
  );
};

export default Skills;


