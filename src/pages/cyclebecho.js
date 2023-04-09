import React,{useState,useEffect} from 'react';
import ProjectDetails from "@/components/molecules/ProjectDetails/ProjectDetails";
import {
  BarLoader,
  ClimbingBoxLoader,
  MoonLoader,
  RotateLoader,
  SyncLoader
} from "react-spinners";

const test3 = () => {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1400);
  }, []);

  let headerText = "CYCLEBECHO.COM";
  let gifSrcObj = {
    src:"/assets/videos/cyclebecho1.gif",
    className: "object-cover h-[600px] w-[300px]",
    alt:"cyclebecho!ProjectGif"
  }
  let caseStudyLinkObj = {
    href: "/cyclebecho/Casestudy",
    gifClassName: "h-[60px] w-[110px]"
  }
  let styleObj = {
    backgroundColor: "#ecbc39",
    textColor: "#FFFFFF"
  }

  return (
   
      <div>
      <ProjectDetails headerText={headerText} gifSrcObj={gifSrcObj} caseStudyLinkObj={caseStudyLinkObj} styleObj={styleObj} />
  </div>
      
    
   
  )
}

export default test3