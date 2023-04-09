import React from "react";
// 1. Importing framer-motion
import { motion } from "framer-motion";

import "./Marquee.module.css";

// 2. Defining Variants
const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
};

const Marquee = () => {
  return (
    <div>
      <div className="marquee overflow-hidden ">
                {/* 3. Using framer motion */}
        <motion.div
          className="track"
          variants={marqueeVariants}
          animate="animate"
        >
         <div className="flex gap-[4rem]">
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0]">
            {" "}
            PROJECTS{" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-80">
            {" "}
            PROJECTS {" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-60">
            {" "}
            PROJECTS{" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-40">
            {" "}
            PROJECTS {" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-20">
            {" "}
            PROJECTS{" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0]">
            {" "}
            PROJECTS{" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-80">
            {" "}
            PROJECTS{" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-60">
            {" "}
            PROJECTS {" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-40">
            {" "}
            PROJECTS {" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-20">
            {" "}
            PROJECTS {" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0]">
            {" "}
            PROJECTS {" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-80">
            {" "}
            PROJECTS {" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-60">
            {" "}
            PROJECTS {" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-40">
            {" "}
            PROJECTS {" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-20">
            {" "}
            PROJECTS {" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0]">
            {" "}
            PROJECTS {" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-80">
            {" "}
            PROJECTS {" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-60">
            {" "}
            PROJECTS {" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-40">
            {" "}
            PROJECTS{" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-20">
            {" "}
            PROJECTS{" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0]">
            {" "}
            PROJECTS{" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-80">
            {" "}
            PROJECTS{" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-60">
            {" "}
            PROJECTS{" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-40">
            {" "}
            PROJECTS{" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-20">
            {" "}
            PROJECTS{" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0]">
            {" "}
            PROJECTS{" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-80">
            {" "}
            PROJECTS{" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-60">
            {" "}
            PROJECTS{" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-40">
            {" "}
            PROJECTS{" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-20">
            {" "}
            PROJECTS{" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0]">
            {" "}
            PROJECTS{" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-80">
            {" "}
            PROJECTS{" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-60">
            {" "}
            PROJECTS{" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-40">
            {" "}
            PROJECTS{" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-20">
            {" "}
            PROJECTS{" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0]">
            {" "}
            PROJECTS{" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-80">
            {" "}
            PROJECTS{" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-60">
            {" "}
            PROJECTS{" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-40">
            {" "}
            PROJECTS{" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-20">
            {" "}
            PROJECTS{" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0]">
            {" "}
            PROJECTS{" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-80">
            {" "}
            PROJECTS{" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-60">
            {" "}
            PROJECTS{" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-40">
            {" "}
            PROJECTS{" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-20">
            {" "}
            PROJECTS{" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0]">
            {" "}
            PROJECTS{" "}
          </div>
          <div className="flex font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-80">
            {" "}
            PROJECTS{" "}
          </div>
          <div className=" font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-60">
            {" "}
            PROJECTS{" "}
          </div>
          <div className=" font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-40">
            {" "}
            PROJECTS{" "}
          </div>
          <div className=" font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-20">
            {" "}
            PROJECTS{" "}
          </div>
          <div className=" font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0]">
            {" "}
            PROJECTS{" "}
          </div>
          <div className=" font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-80">
            {" "}
            PROJECTS{" "}
          </div>
          <div className=" font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-60">
            {" "}
            PROJECTS{" "}
          </div>
          <div className=" font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-40">
            {" "}
            PROJECTS{" "}
          </div>
          <div className=" font-sora tracking-[20.5px] text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-20">
            {" "}
            PROJECTS{" "}
          </div>
        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;