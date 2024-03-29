import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import style from "@/styles/Home.module.css";
import Hey from "@/components/atoms/Hey/Hey";
import Text1 from "@/components/atoms/Text1/Text1";
import SunnyButton from "@/components/atoms/SunnyButton/SunnyButton";
import Intro from "@/components/molecules/Intro/Intro";
import About from "@/components/molecules/About/About";
import HomePage from "@/components/organisms/Home/Home";
import Navbar from "@/components/organisms/Navbar/Navbar";
import { useState, useEffect } from "react";
import {
  BarLoader,
  ClimbingBoxLoader,
  MoonLoader,
  RotateLoader,
  SyncLoader
} from "react-spinners";
import LoadingBar from "@/components/molecules/LoadingBar/LoadingBar";
import {motion} from "framer-motion";
import HomePhone from "@/components/organisms/HomePhone/HomePhone";



export default function Home() {
  const [loader, setLoader] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [phone,setPhone] = useState(false);
  
  useEffect(()=>{
    if (window != undefined){
      var wid =  window.innerWidth;
      console.log(wid);
      if(wid<768)
      setPhone(true);
      else
      setPhone(false);
    }
  });




  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    }
  }

  
  
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1400);
  }, []);

  return (
    <div className=" bg-[#20201e] h-screen w-full items-center justify-center">
       
      {loader ? (
        <div className="absolute top-[50vh] left-[50vw] ">
          <SyncLoader
            color="#CC66F0"
            loading={loader}
            size={10}
            speedMultiplier={0.5}
          />
          {/* <LoadingBar/> */}
        </div>
      ) : (
        <div>
          {phone ? <HomePhone /> : <HomePage />}
        </div>
        
      )}
    </div>
  );
}