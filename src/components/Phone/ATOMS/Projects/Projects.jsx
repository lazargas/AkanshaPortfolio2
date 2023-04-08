import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Marquee from "../Marquee/Marquee";

const Projects = () => {
  return (
    <div name="projects" className="h-[120vh] w-full bg-[#20201e] pt-14">
      <Marquee/>
      <div className="flex gap-[5rem] justify-center py-10 xl:gap-[20rem] ">
        
          <motion.div>
            <Link href="/sweetScapes">
              <img
                className="relative  z-[1] "
                src="/assets/phoneProject1.png"
                alt=""
              />
              <img
                src="/assets/purp1.png"
                className="relative  z-[2] opacity-0 hover:opacity-100 hover:transition-all hover:duration-[0.6s] hover:ease-[ease]"
                alt=""
              />
            </Link>
            <div>
              <Link href="/miscellaneous">
                <img
                  className="relative  z-[1] "
                  src="/assets/phoneProject2.png"
                  alt=""
                />
                <img
                  src="/assets/white 1.png"
                  className="relative  z-[2] opacity-0 hover:opacity-100 hover:transition-all hover:duration-[0.6s] hover:ease-[ease]"
                  alt=""
                />
              </Link>
            </div>
          </motion.div>
          <div className="" >
            <div>
              <Link href="/cyclebecho">
                <img
                  className="relative  z-[1] "
                  src="/assets/phoneProject4.png"
                  alt=""
                />

                <img
                  src="/assets/yellow 1.png"
                  className="relative   z-[2] opacity-0 hover:opacity-100 hover:transition-all hover:duration-[0.6s] hover:ease-[ease]"
                  alt=""
                />
              </Link>
            </div>
            <div>
              <Link href="/bakeit">
                <img
                  className="relative   z-[1] "
                  src="/assets/phoneProject3.png"
                  alt=""
                />
                <img
                  src="/assets/grey 1.png"
                  className="relative  z-[2] opacity-0 hover:opacity-100 hover:transition-all hover:duration-[0.6s] hover:ease-[ease]"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Projects;
