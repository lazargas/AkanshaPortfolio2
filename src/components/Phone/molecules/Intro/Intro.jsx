import React from "react";
import Hey2 from "../../ATOMS/Hey/Hey2";
import Text1 from "../../ATOMS/Text1/Text1";
import { AkanshaContext } from "@/Context/Akansha";
import { useContext } from "react";
import Hey3 from "@/components/atoms/Hey/Hey3";
import SunnyButton from "@/pages/test";

const Intro = () => {
  const { setOpen } = useContext(AkanshaContext);
  const handleclick = () => {
    setOpen(false);
  };
  return (
    <>
      <img
        src="/assets/sun.png"
        alt=""
      />
      <div
        name="home"
        className="px-16 h-screen w-full flex gap-[1.5rem] items-center"
      >
        <div className="">
          <Hey3 />
        </div>
        <div className="relative bottom-[-110px] ">
          <Text1 />
        </div>
      </div>
    </>
  );
};

export default Intro;
