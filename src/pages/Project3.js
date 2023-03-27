import React from "react";
import HorizontalScroll from "react-scroll-horizontal";

const Page1 = () => {
  return (
    <div className=" flex flex-col items-center h-screen  bg-[#CC66F0]">
      <HorizontalScroll>
        <p className=" font-grand relative bottom-[120px] tracking-wide text-black text-[600px] bg-[#CC66F0]">
          SWEETSCAPES
        </p>
        <div className=' flex justify-center items-center h-screen w-screen' >
        <img
              src="/assets/videos/sweetscapes.gif"
              className="h-[600px] w-[300px]"
              alt=""
            />
      </div>
      </HorizontalScroll>
    </div>
  );
};

export default Page1;
