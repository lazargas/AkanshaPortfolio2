import Circular from "@/components/atoms/circular/Circular";
import LoadingBar from "@/components/atoms/Loader/Loader";
import React from "react";
import ReactCurvedText from "react-curved-text";
import Head from "next/head";

const SunnyButton = () => {
  const arc = 120;
  const radius = 400;
  const s = "SKIP TO THE SUNNY SIDE";
  const characters = s.split("");

  return (
    <>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Bakbak+One&family=Faustina:wght@300&family=Happy+Monkey&family=Poppins:ital,wght@0,400;1,300&family=Rubik+Iso&family=Sora&display=swap');
        </style>
      </Head>
      <div >
        <svg className="h-screen w-full z-[5] " >
          <defs>
            <path
              d="
              M 400, 400
              m -132, 0
              a 132,132 0 1,0 264,0
              a 132,132 0 1,0 -264,0
              "
              id="textcircle"
            />
                
          </defs>
          <text
            style={{
              fontSize: 25,
              fontWeight: 200,
              textTransform: "uppercase",
              letterSpacing: "22px",
              fontFamily: "Sora, sans-serif",
              
            }}
          >
            <textPath xlinkHref="#textcircle">SKIP TO THE SUNNY SIDE</textPath>
          </text>
        </svg>
      </div>
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
