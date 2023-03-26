import React from "react";
import HorizontalScroll from "react-scroll-horizontal";

const Page1 = () => {
  return (
    <div className=" flex flex-col items-center h-screen  bg-[#FFFFFF]">
      <HorizontalScroll>
        <p className=" font-grand relative bottom-[120px] tracking-wide text-black text-[600px] bg-[#FFFFFF]">
          MISCELLANEOUS
        </p>
      </HorizontalScroll>
    </div>
  );
};

export default Page1;
