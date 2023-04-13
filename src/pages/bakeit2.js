import ScrollSection from "@/components/molecules/ScrollSection/ScrollSection";
import ScrollSection2 from "@/components/molecules/ScrollSection/ScrollSection2";
import React from "react";

const test3 = () => {
  return (
    <div className="flex flex-col">
      <ScrollSection2 text="BAKEit!" color="#888787" />
      <div className="h-screen w-screen flex justify-center items-center bg-[#888787] ">
        <img
          src="/assets/videos/bakeit.gif"
          className="h-[80vh] "
          alt=""
        />
      </div>
      <div className="h-screen w-full flex justify-center pt-20  bg-[#888787]">
      
    <iframe src="/assets/casestudies/bakeit/bakeit.pdf" width="80%" height="600px"/> 

      </div>
    </div>
  );
};

export default test3;
