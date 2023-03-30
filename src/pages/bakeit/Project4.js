import React from "react";
import HorizontalScroll from "react-scroll-horizontal";
import Link from "next/link";

const Page1 = () => {
  return (
    <div className=" flex flex-col items-center h-screen  bg-[#888787]">
      <HorizontalScroll>
        <p className=" font-grand tracking-[50px] relative bottom-[120px] text-white text-[600px] bg-[#888787]">
          BAKEit!
        </p>
        <div className=" relative flex justify-center items-center h-full w-[120vw]  ">
            <img
              src="/assets/videos/bakeit.gif"
              className="absolute h-[600px] w-[300px]"
              alt=""
            />
            <Link href="/bakeit/Casestudy" >
            <div className="flex flex-col-reverse">
              
              <img
                src="/assets/rightArrow.png"
                className="h-[60px] w-auto  absolute right-[20px] mb-10 invert-[100] "
                alt=""
              />
              
              <p className="absolute font-grand right-[20px] text-[18px] text-[#fff] tracking-wide ">MOVE TO CASE STUDY</p>
            </div>
            </Link>
          </div>
      </HorizontalScroll>
    </div>
  );
};

export default Page1;
