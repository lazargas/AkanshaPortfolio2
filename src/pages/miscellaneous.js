import ProjectDetails from "@/components/molecules/ProjectDetails/ProjectDetails";
import React from "react";
import Fade from "react-reveal/Fade";
const MiscellaneousProject = () => {

  let headerText = "assets/icons/MISCELLANEOUS.svg";
  let gifSrcObj = {
    src:"/assets/videos/toronto.gif",
    src1:"/assets/videos/cakeshop.gif",
    className: " ml-[30px] object-cover h-[500px] w-auto sm:h-[300px] sm:w-[500px]",
    alt:"miscellaneousProjectGif"
  }
  let caseStudyLinkObj = {}
  let styleObj = {
    backgroundColor: "#FFF",
    textColor: "black"
  }

  return (
    <Fade duration={1000} >
    <ProjectDetails headerText={headerText} gifSrcObj={gifSrcObj} caseStudyLinkObj={caseStudyLinkObj} styleObj={styleObj} />
    </Fade>
  );
};

export default MiscellaneousProject;
