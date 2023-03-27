import React from "react";
import HorizontalScroll from "react-scroll-horizontal";

const Page1 = () => {
  return (
    <>
      <div className=" flex items-center h-screen  bg-[#ecbc39]">
        <HorizontalScroll>
          <p className=" font-grand relative bottom-[120px] text-white text-[600px] bg-[#ecbc39]">
            CYCLEBECHO.COM
          </p>
          <div className=" flex justify-center items-center h-screen w-screen">
            <img
              src="/assets/videos/cyclebecho1.gif"
              className="h-[600px] w-[300px]"
              alt=""
            />
          </div>
          <div>
            
          </div>
        </HorizontalScroll>
      </div>
    </>
  );
};

export default Page1;
