import React from "react";
import Hey2 from "../../ATOMS/Hey/Hey2";
import Text1 from "../../ATOMS/Text1/Text1";
import { AkanshaContext } from "@/Context/Akansha";
import { useContext } from "react";
import Hey3 from "@/components/atoms/Hey/Hey3";
import SunnyButton from "@/pages/test";
import style from "./Intro.module.css";
import Link from "next/link";

const Intro = () => {
  const { setOpen } = useContext(AkanshaContext);
  const handleclick = () => {
    setOpen(false);
  };
  return (
    <>
      
      <div
        name="home"
        className="px-16 h-screen w-full flex gap-[1.5rem] items-center"
      >
        <Link href="/Design" >
        <div className="absolute top-[80px] right-[40px] " >
          <img src="/assets/sun2.png" className="absolute top-[10px] right-[11px] " alt="" />
        <img
        src="/assets/sun.png"
        alt=""
        className={style.rotate}
      />
      
        </div>
        </Link>
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
