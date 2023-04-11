import React from "react";
import {motion} from "framer-motion";
import Link from "next/link";

const Casestudy = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.75, ease:"easeOut"}} >
      <div className="flex px-14 xl:px-40 justify-between tracking-[5px] font-tex text-4xl pt-10 bg-[#888787]">
      <Link href="/bakeit" >
        <img src="/assets/cross.png" className='absolute top-5 left-5 h-[40px]' alt="" />
        </Link>
        <div className="relative top-3 ">BAKEit!</div>
        <Link href="/" >
        <img src="/assets/phoneContactlogo.png" className=" " alt="" />
        </Link>
        
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
