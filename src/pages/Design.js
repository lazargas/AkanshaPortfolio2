import React from "react";
import styles from "@/styles/Design.module.css";

const Design = () => {
  return (
    <div className="h-[420vh] w-full bg-[#FFFAED] ">
      <div className=" justify-center flex">
        <img src="/assets/logo.png" className="w-[180px] " alt="" />
      </div>
      <div className="flex justify-center">
        <p className="relative top-[-60px] not-italic font-normal text-xl leading-6 text-black font-grand tracking-[10px] ">
          akansha singh
        </p>
      </div>

      <div>
        <div className="flex justify-evenly ">
          <img
            src="/assets/Designs/1.png"
            className="w-[151px] h-[142px] "
            alt=""
          />
          <img
            src="/assets/Designs/2.png"
            className="w-[222px] h-[225px] "
            alt=""
          />
        </div>
        <div className="flex justify-evenly pt-8 ">
          <img src="/assets/design.svg" className="w-[250px] object-fill relative bottom-[15vh] " alt="" />
          <img
            src="/assets/Designs/3.png"
            className="w-[153px] h-[259px] "
            alt=""
          />
        </div>
        <div className="flex justify-start pl-20 relative bottom-[80px] " >
        <img
            src="/assets/Designs/4.png"
            className="w-[183px] h-[145px] "
            alt=""
          />
        </div>
        <div className="flex justify-evenly relative bottom-[50px] " >
        <img
            src="/assets/Designs/23.png"
            className="h-[257px] w-[257px] "
            alt=""
          />
           <p className="relative w-[130px] h-[227px] not-italic font-bold text-3xl leading-[130.5%] tracking-[0.18em] text-[#741097] font-grand " >
        DON’T THINK OUTSIDE THE BOX THINK WHAT YOU CAN DO WITH THE BOX
        </p>
        </div>
        <div className="flex justify-center" >
          <img src="/assets/designs.png" className="w-full object-cover" alt="" />
        </div>
        
      </div>
      
      <div></div>
    </div>
  );
};

export default Design;
