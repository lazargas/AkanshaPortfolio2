import VerticalText from "@/components/atoms/VerticalText/VerticalText";
import React from "react";
import { skills } from "../../../Utils/data/Skills"
import style from "./Skills.module.css";
import MarqueeSkills1 from "@/components/Phone/ATOMS/MarqueeSkills1/MarqueeSkills1"

const Skills = () => {
  return (
    <>
      <div name="skills" className={style.SkillsContainer}>   
        <div className={style.SkillsContainer_SkillsList}>
          {skills.map((skill => <VerticalText text={skill.text} />))}
        </div>
        <marquee direction="up" className={style.SkillsContainer_Marquee}>
        <div className="">SKILLS</div>
          <div className="opacity-80">SKILLS</div>
          <div className="opacity-60">SKILLS</div>
          <div className="opacity-40">SKILLS</div>
          <div className="opacity-40">SKILLS</div>
          <div className="opacity-20">SKILLS</div>
        </marquee>
      </div>
    </>
  );
};

export default Skills;


