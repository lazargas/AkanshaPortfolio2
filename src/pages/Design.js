import React from "react";
import styles from "@/styles/Design.module.css";
import Link from "next/link";
import PhotoGallery from "@/components/atoms/PhotoGallery/PhotoGallery"

const Design = () => {
  return (
    <div className="w-full bg-[#FFFAED] ">
      <Link href="/">
        <div className="absolute inline-block top-[30px] right-[10px]">
          <img src="/assets/back.png" className={styles.rotate} alt="" />
          <img
            src="/assets/dot3.png"
            className="relative bottom-[50px] left-[13.5px] "
            alt=""
          />
        </div>
      </Link>
      <div className=" justify-center flex">
        <img src="/assets/logo.png" className="w-[180px] " alt="" />
      </div>
      <div className="flex justify-center">
        <p className="relative top-[-60px] not-italic font-normal text-xl leading-6 text-black font-tex tracking-[5px] ">
          akansha singh
        </p>
      </div>
      <div className="" >
      
      </div>
      <PhotoGallery />
      <div>

      </div>
    </div>
  );
};

export default Design;
