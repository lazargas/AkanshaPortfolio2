import React from "react";
import HorizontalScroll from "react-scroll-horizontal";
import styles from "./Page1.module.css";
import { Document } from "react-pdf";
import Link from "next/link";

const Page1 = () => {
  return (
    <>
      <div className="bg-[#F1D37D] h-screen w-full flex justify-center items-center ">
        <HorizontalScroll>
          <div className="not-italic font-grand tracking-wide text-[600px] leading-[100.5%] text-white">
            CYCLEBECHO.COM
          </div>
          <div className="relative flex justify-center items-center h-full w-[120vw]  ">
            
            <img
              src="/assets/videos/cyclebecho1.gif"
              className="absolute object-cover h-[600px]  w-[300px]"
              alt=""
            />
            <Link href="/cyclebecho/Casestudy" >
            <div className="flex flex-col-reverse">
              
              <img
                src="/assets/rightArrow.png"
                className="h-[60px] w-auto  absolute right-[20px] mb-10  "
                alt=""
              />
              
              <p className="absolute font-grand right-[20px] text-[18px] text-[#000] tracking-wide ">MOVE TO CASE STUDY</p>
            </div>
            </Link>
          </div>
        </HorizontalScroll>
      </div>
    </>
  );
};

export default Page1;

{
  /* <div className=" flex flex-col items-baseline h-screen bg-[#ecbc39]">
<div className={styles.why}>CYCLEBECHO.COM</div>
<div className=" flex flex-col justify-center items-center h-screen w-screen">
  <img
    src="/assets/videos/cyclebecho1.gif"
    className="h-[600px] flex justify-center items-center w-[300px]"
    alt=""
  />
</div>
</div> */
}
