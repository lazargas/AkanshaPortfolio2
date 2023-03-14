import Hey from "@/components/atoms/Hey/Hey";
import Hey2 from "@/components/atoms/Hey/Hey2";
import SunnyButton from "@/pages/test";
import Text1 from "@/components/atoms/Text1/Text1";
import React from "react";
import style from "./Intro.module.css";
import Head from "next/head";

const Intro = () => {
  return (
    <>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Bakbak+One&family=Faustina:wght@300&family=Happy+Monkey&family=Poppins:ital,wght@0,400;1,300&family=Rubik+Iso&family=Sora&display=swap');
        </style>
      </Head>
      <div className=" relative w-full h-screen" name="intro">
        {/* bg-[url('/assets/background1.jpg')] */}
        <div className="absolute bottom-20 left-[180px]">
          <Hey2 />
        </div>
        <div>
          <SunnyButton />
        </div>
        <div className={style.Rectangle15}>
          <img
            src="/assets/intro2.gif"
            className="w-[220px] h-[96px] rounded-[30px]"
          />
        </div>
        <div className={style.Text1}>
          <Text1 />
        </div>
      </div>
    </>
  );
};

export default Intro;
