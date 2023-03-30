import React from "react";
import HorizontalScroll from "react-scroll-horizontal";

const Page1 = () => {
  return (
    <div className=" flex flex-col items-center h-screen  bg-[#FFFFFF]">
      <HorizontalScroll>
        <p className=" font-grand relative bottom-[120px] tracking-wide text-black text-[600px] bg-[#FFFFFF]">
          MISCELLANEOUS
        </p>
        <div className=' flex justify-center items-center h-screen w-screen' >
      <img src="/assets/videos/toronto.gif" className=" object-cover h-[600px] w-[1200px] sm:h-[300px] sm:w-[500px] " alt="" />
      </div>
      </HorizontalScroll>
    </div>
  );
};

export default Page1;
