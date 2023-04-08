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
        className={style.IntroContainer + " px-16 h-screen w-full flex gap-[1.5rem] items-center bg-[#20201e]"}
      >
        <Link href="/Design" >
        <div className="absolute top-[90px] right-[20px] " >
          <img src="/assets/sun2.png" className="absolute top-[10px] right-[11px] " alt="" />
        <img
        src="/assets/sun.png"
        alt=""
        className={style.rotate}
      />
      
        </div>
        </Link>
        <div className={style.homePageTextContainer}>
            <Hey3 />
          <div className={``}>
            <Text1 />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
