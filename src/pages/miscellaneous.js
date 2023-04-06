import ProjectDetails from "@/components/molecules/ProjectDetails/ProjectDetails";
import React from "react";

const MiscellaneousProject = () => {

  let headerText = "MISCELLANEOUS";
  let gifSrcObj = {
    src:"/assets/videos/toronto.gif",
    className: "object-cover h-[500px] w-auto sm:h-[300px] sm:w-[500px]",
    alt:"miscellaneousProjectGif"
  }
  let caseStudyLinkObj = {}
  let styleObj = {
    backgroundColor: "#CC66F0",
    textColor: "black"
  }

  return (
    <ProjectDetails headerText={headerText} gifSrcObj={gifSrcObj} caseStudyLinkObj={caseStudyLinkObj} styleObj={styleObj} />
  );
};

export default MiscellaneousProject;
