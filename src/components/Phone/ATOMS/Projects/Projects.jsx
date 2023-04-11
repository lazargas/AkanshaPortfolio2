import React from "react";
import Link from "next/link";
import Marquee from "../Marquee/Marquee";
import style from "./Projects.module.css";
import { useState,useEffect } from "react";

const Projects = () => {
  const [loading, setLoading] = useState(false);
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
  const handleClick = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      window.location.href = e.currentTarget.href
    }, 500)
  }
  return (
    <div name="projects" className="w-full bg-[#20201e] pt-14">
      <Marquee/>
      <div className={style.ProjectContainer}>
        
        <div className={style.ProjectGroup}>
            <Link href="/sweetScapes">
              <div className={style.ProjectTile1}>
                    <img
                      src="/assets/purp1.png"
                      className={"z-[2] opacity-0 hover:opacity-100 hover:transition-all hover:duration-[0.6s] hover:ease-[ease] "+style.imtip}
                      alt=""
                    />
                    
              </div>
              {phone?<p className="text-white text-[24px] font-sora pt-2 sm:text-[10px]" >Click me!</p>:<p className="text-white text-[24px] font-sora pt-2 sm:text-[10px]" >Hover me!</p>}
            </Link>
            <Link href="/cyclebecho">
              <div className={style.ProjectTile2}>
                    <img
                      src="/assets/yellow 1.png"
                      className={"z-[2] opacity-0 hover:transition-all hover:duration-[0.6s] hover:ease-[ease] "+style.imtip}
                      alt=""
                    />
              </div>
            </Link>
          </div>
          <div className={style.ProjectGroup}>
            <Link href="/miscellaneous">
              <div className={style.ProjectTile4}>
                    <img
                      src="/assets/white 1.png"
                      className={"z-[2] opacity-0 hover:transition-all hover:duration-[0.6s] hover:ease-[ease] "+style.imtip}
                      alt=""
                    />
              </div>
            </Link>
            <Link href="/bakeit">
              <div className={style.ProjectTile3}>
                    <img
                      src="/assets/grey 1.png"
                      className={"z-[2] opacity-0 hover:transition-all hover:duration-[0.6s] hover:ease-[ease] "+style.imtip}
                      alt=""
                    />
              </div>
            </Link>
          </div>
            {/* <Link href="/sweetScapes">
              <img
                className="relative  z-[1] "
                src="/assets/project1.png"
                alt=""
              />
              <img
                src="/assets/purp1.png"
                className="relative  z-[2] opacity-0 hover:opacity-100 hover:transition-all hover:duration-[0.6s] hover:ease-[ease]"
                alt=""
              />
            </Link> */}
            {/* <div>
              <Link href="/miscellaneous">
                <img
                  className="relative  z-[1] "
                  src="/assets/project2.png"
                  alt=""
                />
                <img
                  src="/assets/white 1.png"
                  className="relative  z-[2] opacity-0 hover:opacity-100 hover:transition-all hover:duration-[0.6s] hover:ease-[ease]"
                  alt=""
                />
              </Link>
            </div> */}
          {/* <div className="" >
            <div>
              <Link href="/cyclebecho">
                <img
                  className="relative  z-[1] "
                  src="/assets/project4.png"
                  alt=""
                />

                <img
                  src="/assets/yellow 1.png"
                  className="relative z-[2] opacity-0 hover:opacity-100 hover:transition-all hover:duration-[0.6s] hover:ease-[ease]"
                  alt=""
                />
              </Link>
            </div>
            <div>
              <Link href="/bakeit">
                <img
                  className="relative   z-[1] "
                  src="/assets/project3.png"
                  alt=""
                />
                <img
                  src="/assets/grey 1.png"
                  className="relative z-[2] opacity-0 hover:opacity-100 hover:transition-all hover:duration-[0.6s] hover:ease-[ease]"
                  alt=""
                />
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    
  );
};

export default Projects;
