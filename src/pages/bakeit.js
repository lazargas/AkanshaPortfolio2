import React from "react";
import ProjectDetails from "@/components/molecules/ProjectDetails/ProjectDetails";
import Fade from "react-reveal/Fade";
const Page1 = () => {

  let headerText = "/assets/icons/bake.svg";
  let gifSrcObj = {
    src:"/assets/videos/bakeit.gif",
    className: "object-cover h-[600px] w-[300px]",
    alt:"bakeit!ProjectGif"
  }
  let caseStudyLinkObj = {
    href: "/bakeit/Casestudy",
    gifClassName: "h-[60px] w-[110px]"
  }
  let styleObj = {
    backgroundColor: "#888787",
    textColor: "#FFFFFF"
  }

  return (
    <Fade>
    <ProjectDetails headerText={headerText} gifSrcObj={gifSrcObj} caseStudyLinkObj={caseStudyLinkObj} styleObj={styleObj} />
    </Fade>
  );
};

export default Page1;
