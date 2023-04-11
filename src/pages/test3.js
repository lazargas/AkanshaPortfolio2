import ScrollSection from "@/components/molecules/ScrollSection/ScrollSection";
import ScrollSection2 from "@/components/molecules/ScrollSection/ScrollSection2";
import React from "react";

const test3 = () => {
  return (
    <div className="flex flex-col">
      <ScrollSection />
      <div className="h-screen w-screen flex justify-center items-center bg-[#ecbc39] ">
        <img
          src="/assets/videos/cyclebecho1.gif"
          className="h-[80vh] "
          alt=""
        />
      </div>
      <div className="h-screen w-full flex justify-center pt-20  bg-[#ecbc39]">
        <embed
          src="/assets/casestudies/cyclebecho.pdf"
          className="w-[80vw] border-[10px] m-10 border-solid border-[#000]"
          type=""
        />
      </div>
    </div>
  );
};

export default test3;
