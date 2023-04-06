import ProjectDetails from "@/components/molecules/ProjectDetails/ProjectDetails";
import React from "react";

const SweetScapes = () => {

  let headerText = "SWEETSCAPES";
  let gifSrcObj = {
    src:"/assets/videos/sweetscapes.gif",
    className: "object-cover h-[600px] w-[300px]",
    alt:"sweetScapesProjectGif"
  }
  let caseStudyLinkObj = {}
  let styleObj = {
    backgroundColor: "#CC66F0",
    textColor: "black"
  }

  return (
    <ProjectDetails  headerText={headerText} gifSrcObj={gifSrcObj} caseStudyLinkObj={caseStudyLinkObj} styleObj={styleObj} />
  );
};

export default SweetScapes;
