import Circular from "@/components/atoms/circular/Circular";
import LoadingBar from "@/components/atoms/Loader/Loader";
import React from "react";
import ReactCurvedText from "react-curved-text";
import style from "../styles/test.module.css";
import Head from "next/head";
import Hey2 from "@/components/atoms/Hey/Hey2";
import { motion } from "framer-motion";
import Link from "next/link";

const pathVariant = {
  hidden: {
    opacity:0,
    pathLength: 0,
  },
  visible: {
    opacity:1,
    pathLength: 1,
    transition: {
      duration: 10,
      ease: "easeInOut"
    },
  },
};

const SunnyButton = () => {
  return (
    <>
      <Link href="/Extras">
        <div>
          <motion.svg className={style.all} width="100%" height="auto">
            <defs>
              <motion.path
                d="
              M 1380, 75
              m -70, 0
              a 70,70 0 1,0 140,0
              a 70,70 0 1,0 -140,0
              "
                id="textcircle"
                variants={pathVariant}
              />
            </defs>
            <text
              fill="#fff"
              style={{
                fontSize: 8,
                fontWeight: 200,
                textTransform: "uppercase",
                letterSpacing: "22px",
                fontFamily: "Sora, sans-serif",
              }}
            >
              <textPath textLength={420} xlinkHref="#textcircle">
                SKIP TO THE SUNNY SIDE
              </textPath>
            </text>
            <circle cx="1380" cy="75" r="40" fill="#FFD700" id="background" />
            <circle
              cx="1380"
              cy="75"
              r="35"
              stroke="#FFA500"
              stroke-width="3"
              fill="none"
            />
          </motion.svg>
        </div>
      </Link>
    </>
  );
};

export default SunnyButton;

// <div className={style.ele} >

//         <div id="sabpe" >S</div>
//         <div className='rotate-[34deg] origin-[0_100px]' id="sabpe" >K</div>
//         <div className='rotate-[51.42deg] origin-[0_100px]' id="sabpe">I</div>
//         <div className='rotate-[68.56deg] origin-[0_100px] ' id="sabpe">P</div>
//         <div className='rotate-[85.7deg] origin-[0_100px] ' id="sabpe" > </div>
//         <div className='rotate-[102.84deg] origin-[0_100px] ' id="sabpe">T</div>
//         <div className='rotate-[119deg] origin-[0_100px] ' id="sabpe">O</div>
//         <div className='rotate-[136deg] origin-[0_100px] ' id="sabpe"> </div>
//         <div className='rotate-[153deg] origin-[0_100px]' id="sabpe">T</div>
//         <div className='rotate-[170deg] origin-[0_100px]' id="sabpe">H</div>
//         <div className='rotate-[187deg] origin-[0_100px]' id="sabpe">E</div>
//         <div className='rotate-[204deg] origin-[0_100px]' id="sabpe"> </div>
//         <div className='rotate-[221deg] origin-[0_100px]' id="sabpe">S</div>
//         <div className='rotate-[238deg] origin-[0_100px]' id="sabpe">U</div>
//         <div className='rotate-[255deg] origin-[0_100px]' id="sabpe">N</div>
//         <div className='rotate-[272deg] origin-[0_100px]' id="sabpe">N</div>
//         <div className='rotate-[289deg] origin-[0_100px]' id="sabpe">Y</div>
//         <div className='rotate-[306deg] origin-[0_100px]' id="sabpe"> </div>
//         <div className='rotate-[323deg] origin-[0_100px]' id="sabpe">S</div>
//         <div className='rotate-[340deg] origin-[0_100px]' id="sabpe">I</div>
//         <div className='rotate-[340deg] origin-[0_100px]' id="sabpe">I</div>
//         <div className='rotate-[357deg] origin-[0_100px]' id="sabpe">D</div>
//         <div className='rotate-[360deg] origin-[0_100px]' id="sabpe">E</div>

//     </div>
