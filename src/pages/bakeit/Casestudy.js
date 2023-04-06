import React from "react";
import {motion} from "framer-motion";

const Casestudy = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.75, ease:"easeOut"}} >
      <div className="flex px-14 xl:px-40 justify-between tracking-[5px] font-grand text-4xl pt-10 bg-[#888787]">
        <div className="relative top-3 ">BAKEit!</div>
        <img src="/assets/phoneContactlogo.png" className=" " alt="" />
      </div>
      <div className="h-screen w-full flex justify-center  bg-[#888787]">
        <embed
          src="/assets/casestudies/bakeit/bakeit.pdf"
          className="w-[80vw] border-[10px] m-10 border-solid border-[#000]"
          type=""
        />
      </div>
    </motion.div>
  );
};

export default Casestudy;