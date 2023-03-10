import NavButton from "@/components/atoms/NavButton/NavButton";
import React from "react";
import "./Navbar.module.css";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <>
      <div className={`bg-[#000] z-[6] sticky ${visible ? 'top-0' : ''} Container`}>
      <div className="flex pt-7 ">
          <div className="relative left-[20px]">
            <NavButton text="Home" Name="intro" />
          </div>
          <div className="relative left-[50px] ">
            <NavButton text="About" Name="about" />
          </div>
          <div className="relative left-[80px] ">
            <NavButton text="Skills" Name="skills" />
          </div>
          <div className="relative font-sora text-white left-[170px]">
            <img
              src="/assets/pnglogo.png"
              className="relative w-[160px] bottom-3"
              alt=""
            />
          </div>
          ''
          <div className="relative left-[250px] ">
            <button className="w-[162px] h-[39px] not-italic font-poppins text-xl leading-[30px] text-[#FFF] hover:text-[#CC66F0] hover:transition-all duration-[0.5s] ease-[ease] ">
              <Link to="projects" smooth={true} duration={500}>
                PROJECTS
              </Link>
            </button>
          </div>
          <div className="relative left-[280px] ">
            <NavButton text="Contact" Name="contact" />
          </div>
          <div className="relative left-[320px] ">
            <button className="w-[162px] h-[39px] not-italic font-poppins font-extrabold pt-1 pl-2 pr-2 text-l leading-[30px] text-[#fff] rounded-[22px] border-[1.5px] border-solid border-[#CC66F0]">
              DOWNLOAD CV
            </button>
          </div>
        </div>
    </div>
    </>
  );
};

export default Navbar;
