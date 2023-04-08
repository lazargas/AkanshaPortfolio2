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
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(
          new Blob([blob], { type: "application/pdf" })
        );
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", fileName);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      });
  };
  return (
    <>
      <div
        className={`bg-[#20201e] z-[6] sticky ${
          visible ? "top-0" : ""
        } Container`}
      >
        <div className="flex py-[20px] justify-between px-14 bg-[#20201e] items-center ">
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
            <NavButton text="Projects" Name="projects" />
          </div>
          <div className="">
            <NavButton text="Contact" Name="contact" />
          </div>
          <div className=" ">
            <NavButton onClick={handleClick} text="DOWNLOAD CV" Name="CV" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
