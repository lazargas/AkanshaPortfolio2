import React from 'react'
import style from './Projects.module.css'
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

const Projects = () => {
  return (
    <>
    <div name="projects" className="w-full h-screen ">
    {/* p-7 top-[300vh] pt-60  */}
      <marquee behaviour="alternate" className="relative w-[100%]" >
        <div className="flex">
          <div className="not-italic font-semibold text-[40px] leading-[50px] text-center text-[#CC66F0]"> PROJECTS PROJECTS PROJECTS </div>
          <div className="not-italic font-semibold text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-80"> PROJECTS PROJECTS PROJECTS</div>
          <div className="not-italic font-semibold text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-60"> PROJECTS PROJECTS PROJECTS </div>
          <div className="not-italic font-semibold text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-40"> PROJECTS PROJECTS PROJECTS</div>
          <div className="not-italic font-semibold text-[40px] leading-[50px] text-center text-[#CC66F0] opacity-20"> PROJECTS PROJECTS PROJECTS</div>
        </div>
        </marquee>

        <div className='relative bottom-[120px] ' >
        
        <button className="relative left-[417px] w-[152px] h-[437px] top-[300px] bg-[#CC66F0] shadow-[0px_5px_4px_rgba(255,251,251,0.7)] rounded-[165px]">
        </button>
        <button className="relative left-[417px] w-[152px] h-[437px] top-[182px] bg-[#F1D37D] shadow-[0px_5px_4px_rgba(255,251,251,0.7)] rounded-[165px]">
        </button>
        <button className="relative left-[417px] w-[152px] h-[437px] top-[258px] bg-[#FFFAFA] shadow-[0px_5px_4px_rgba(255,251,251,0.7)] rounded-[165px]">
        </button>
        <button className="relative left-[417px] w-[152px] h-[437px] top-[174px] bg-[#9A9898] shadow-[0px_5px_4px_rgba(255,251,251,0.7)] rounded-[165px]">
        </button>
        </div>
        
    </div>
    
        
    </>
  )
}

export default Projects