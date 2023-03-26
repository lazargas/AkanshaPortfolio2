import React from "react";
import HorizontalScroll from "react-scroll-horizontal";

const Page1 = () => {
  return (
    <div className=" flex flex-col items-center h-screen  bg-[#888787]">
      <HorizontalScroll>
        <p className=" font-grand tracking-[80px] relative bottom-[120px] text-white text-[600px] bg-[#888787]">
          BAKEit!
        </p>
      </HorizontalScroll>
    </div>
  );
};

export default Page1;
