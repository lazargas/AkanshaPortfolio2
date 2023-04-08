import About from "@/components/molecules/About/About";
import Intro from "@/components/Phone/molecules/Intro/Intro";
import Projects from "@/components/Phone/ATOMS/Projects/Projects";
import Skills from "@/components/molecules/Skills/Skills";
import Contact from '@/components/Phone/ATOMS/Contract/Contact'
import Footer from '@/components/Phone/ATOMS/Footer/Footer'
import React from "react";
import Fade from "react-reveal/Fade";
import {
  Animator,
  ScrollContainer,
  Move,
  Sticky,
  ScrollPage,
  batch,
  FadeIn,
  StickyIn,
  MoveOut,
  FadeOut,
  ZoomIn,
  ZoomInScrollOut,
} from "react-scroll-motion";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "../Navbar/Navbar";
import style from "./Home1.module.css";
import SunnyButton from "@/pages/test";

const Home = () => {
  return (
    <div className="" >
      <Navbar/>
    <div className={style.akarsh}>
    <div className="bg-[#20201e]">
    
      <Fade duration={2500}>
        <div >
          <Intro />
        </div>
      </Fade>
        <Fade duration={1250} >
        <div>
          <About />
        </div>
        <div>
          <Skills />
        </div>
        <div>
          <Projects />
        </div>
      </Fade>
      <div>
      <Contact/>
    <Footer/>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Home;