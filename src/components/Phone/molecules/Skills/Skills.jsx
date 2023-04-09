import React, { useEffect, useState } from "react";
import HorizontalText from "../../ATOMS/HorizontalText/HorizontalText";
import { motion, useScroll } from "framer-motion";
import { skills } from "@/Utils/data/Skills";
import style from "./Skills.module.css";

const Skills = () => {
  const { scrollProgress } = useScroll();
  return (
    <div name="skills" className="bg-[#20201e] overflow-hidden w-full">
      <motion.marquee
        direction="up"
        className={`font-poppins w-full h-[500px] text-center rotate-[-90deg] py-8`}
      >
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[30px] font-[800] font-sora text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div>
      </motion.marquee>
      <div className={style.SkillsContainer_SkillsTextContainer}>
        {skills.map((skill) => (
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <HorizontalText text={skill.text} colored={skill["text-color"]} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
