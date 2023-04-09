import ProjectDetails from "@/components/molecules/ProjectDetails/ProjectDetails";
import React from "react";
import Fade from "react-reveal/Fade";
const MiscellaneousProject = () => {

  let headerText = "MISCELLANEOUS";
  let gifSrcObj = {
    src:"/assets/videos/toronto.gif",
    className: "object-cover h-[500px] w-auto sm:h-[300px] sm:w-[500px]",
    alt:"miscellaneousProjectGif"
  }
  let caseStudyLinkObj = {}
  let styleObj = {
    backgroundColor: "#fff",
    textColor: "black"
  }

  return (
    <Fade duration={1500} >
    <ProjectDetails headerText={headerText} gifSrcObj={gifSrcObj} caseStudyLinkObj={caseStudyLinkObj} styleObj={styleObj} />
    </Fade>
  );
};

export default MiscellaneousProject;
