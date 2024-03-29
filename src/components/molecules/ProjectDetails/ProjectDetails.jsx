import React from "react";
import style from "./ProjectDetails.module.css";
import Link from "next/link";
import { useHorizontalScroll } from "../../../Utils/CustomHooks/scroll"

const ProjectDetails = ({headerText, gifSrcObj, caseStudyLinkObj, styleObj}) => {

  const scrollRef = useHorizontalScroll();

  return (
    <>
    <div ref={scrollRef} className={style.projectDetailsContainer+ " px-0"} style={{backgroundColor:styleObj.backgroundColor, color: styleObj.textColor,}}>
        <Link href="/" >
        <img src="/assets/cross.png" className='absolute top-5 left-5 h-[40px]' alt="" />
        </Link>
        
        <div className={style.projectDetailsHeader}>
          {headerText}
        </div>
        <div className={style.projectsDetailsPreview}>
            <img
              src={gifSrcObj.src}
              className={gifSrcObj.className}
              alt={gifSrcObj.alt}
            />
            {(caseStudyLinkObj.href && caseStudyLinkObj.href.length) ? (
              <Link href={caseStudyLinkObj.href} >
                <div className={style.projectsCaseStudyLink}>
                  <img
                    src="/assets/rightArrow.png"
                    className={caseStudyLinkObj.gifClassName}
                    alt=""
                  />
                  
                  <p className="">MOVE TO CASE STUDY</p>
                </div>
            </Link>
            ): null}
          </div>
    </div>
    
    </>
  );
};

export default ProjectDetails;