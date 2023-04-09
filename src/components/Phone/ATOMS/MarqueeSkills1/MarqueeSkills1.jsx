import React from "react";
// 1. Importing framer-motion
import { motion } from "framer-motion";

import "./MarqueeSkills1.module.css"; 

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
         <div className="">SKILLS</div>
          <div className="opacity-80">SKILLS</div>
          <div className="opacity-60">SKILLS</div>
          <div className="opacity-40">SKILLS</div>
          <div className="opacity-40">SKILLS</div>
          <div className="opacity-20">SKILLS</div>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;