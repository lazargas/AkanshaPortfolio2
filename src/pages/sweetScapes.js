import ProjectDetails from "@/components/molecules/ProjectDetails/ProjectDetails";
import React from "react";
import Fade from "react-reveal/Fade";

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
    <Fade duration={1500} >
    <ProjectDetails  headerText={headerText} gifSrcObj={gifSrcObj} caseStudyLinkObj={caseStudyLinkObj} styleObj={styleObj} />
    </Fade>
  );
};

export default SweetScapes;
