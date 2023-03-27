import React, { useEffect, useState } from "react";
import VerticalText from "../../ATOMS/VerticalText/VerticalText";
import {motion,useScroll} from "framer-motion"

const Skills = () => {
  const [h, setH] = useState(0);

  useEffect(() => {
    var he = window.innerWidth;
    setH(he);
    console.log(he);
  }, []);
  
  const {scrollProgress} = useScroll();
  return (
    <div name="skills" className="bg-[#20201e] overflow-hidden h-[290vh] w-full ">
      <motion.marquee
        direction="up"
        className={`font-poppins w-full h-[500px] text-center rotate-[-90deg] py-8`}
      >
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-grand text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div>
        
      </motion.marquee>
      <div>
        <div className=" bg-[20201e]" >
          <div className="" >
          <VerticalText  text={"3D VISUALISATION"} />
          </div>
          <div className="" >
          <VerticalText text={"PHOTOSHOP"} />
          </div>
          
           
          <motion.div 
    initial={{ opacity: 0,
    fontSize:"28px",
    color:"#fff"
    }}
  whileInView={{ opacity: 1,
  fontSize:"40px",
  overflow:"hidden",
  color:scrollProgress
  }}
    className={`w-full pl-5 mt-10 overflow-x-hidden h-12 not-italic font-tex tracking-[8px] text-3xl leading-[45px]  text-[#ECDAD8] z-[1] bg-[#20201e]  cursor-none `}>
    GRAPHIC DESIGNING
    </motion.div>
          <VerticalText text={"FIGMA"} />
          <VerticalText text={"ADOBE XD"} />
          <VerticalText text={"ILLUSTRATOR"} />
          <VerticalText text={"INDESIGN"} />
          <VerticalText text={"ARCHITECTURE"} />
          <VerticalText text={"HTML"} />
          <VerticalText text={"UI/UX DESIGNER"} />
          <VerticalText text={"REVIT"} />
          <VerticalText text={"FILMORA"} />
          <VerticalText text={"AFTER EFFECTS"} />
          <VerticalText text={"CSS"} />
          <VerticalText text={"WIREFRAMING"} />
          <VerticalText text={"PROTOTYPING"} />
          <VerticalText text={"ANIMATION"} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
