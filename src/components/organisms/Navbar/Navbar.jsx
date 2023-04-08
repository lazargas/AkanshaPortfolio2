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
  let pdfUrl = "/assets/resume/RESUME.pdf";
  let fileName = "resume";
  const handleClick = () => {
    fetch(pdfUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob], {type: 'application/pdf'}));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      });
  }
  return (
    <>
      <div className={`bg-[#20201e] z-[6] sticky ${visible ? 'top-0' : ''} Container`}>
      <div className="flex py-4 justify-evenly bg-[#20201e] items-center ">
          <div className="">
            <NavButton text="Home" Name="intro" />
          </div>
          <div className=" ">
            <NavButton text="About" Name="about" />
          </div>
          <div className=" ">
            <NavButton text="Skills" Name="skills" />
          </div>
          {/* <div className="font-sora text-white">
            <img
              src="/assets/pnglogo.png"
              className="w-[150px] "
              alt=""
            />
          </div> */}
          
          <div className=" ">
            <button className=" cursor-none w-[162px] h-[39px] not-italic font-poppins text-xl leading-[30px] text-[#CC66F0] hover:text-[#fff] hover:transition-all duration-[0.5s] ease-[ease] ">
              <Link to="projects" smooth={true} duration={500}>
                PROJECTS
              </Link>
            </button>
          </div>
          <div className="">
            <NavButton text="Contact" Name="contact" />
          </div>
          <div className=" ">
            <button onClick={handleClick} className=" cursor-none w-[162px] h-[39px] not-italic font-poppins font-semibold pt-1 pl-2 pr-2 text-l leading-[30px] text-[#fff] rounded-[22px] border-[1.5px] border-solid border-[#CC66F0] hover:border-[#fff] hover:text-[#CC66F0] hover:transition-all duration-[0.5s] ease-[ease] ">
              DOWNLOAD CV
            </button>
          </div>
        </div>
    </div>
    </>
  );
};

export default Navbar;
