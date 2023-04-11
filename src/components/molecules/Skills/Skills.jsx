import VerticalText from "@/components/atoms/VerticalText/VerticalText";
import React from "react";
import { skills } from "../../../Utils/data/Skills"
import style from "./Skills.module.css";
import MarqueeSkills1 from "@/components/Phone/ATOMS/MarqueeSkills1/MarqueeSkills1"
import {motion} from "framer-motion"

const Skills = () => {
  return (
    <>
      <div name="skills" className={style.SkillsContainer}>   
        <div className={style.SkillsContainer_SkillsList}>
          {skills.map((skill => <VerticalText text={skill.text} />))}
        </div>
        <motion.marquee
        direction="up"
        className={`font-poppins w-full h-[500px] text-center py-8`}
      >
        <div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div><div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div><div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div><div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div><div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div><div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div><div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div><div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div><div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div><div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div><div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div><div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div><div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div><div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div><div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div><div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div><div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div><div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div><div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div><div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div><div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div><div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div><div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div><div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div><div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl pt-2 pb-2 leading-[144px] text-[#F1D37D]">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-80">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-60">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-40">
          SKILLS
        </div>
        <div className="not-italic tracking-[35px] font-[800] font-justDance  text-8xl p-2 leading-[121px] text-[#F1D37D] opacity-20">
          SKILLS
        </div>
        
        
      </motion.marquee>
        
      </div>
    </>
  );
};

export default Skills;


