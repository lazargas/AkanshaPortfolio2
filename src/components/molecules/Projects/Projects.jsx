import React from 'react'
import style from './Projects.module.css'
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import Link from "next/link";

const Projects = () => {
  return (
    <>
    <div name="projects" className="w-full h-[125vh] ">
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
        <div className='relative top-[630px] left-[200px] w-[159px] h-[32px] font-sora text-[24px] text-[#fff]' >Hover me!</div>
        <button>
        <Link href={{ pathname: "Extras" }}>
        <div className="absolute text-[#000] text-[200px] font-tex font-semibold left-[280px] top-[350px] z-[1] hover:text-[250px] hover:bg-[#fff] hover:transition-all hover:duration-[1s] hover:ease-[ease]">N</div>
          <img src="/assets/project1.png" alt="" className='relative h-[254px] w-[236px]  left-[200px] top-[150px]  ' />
          </Link>
          
        </button>
        <button>
        <img src="/assets/project2.png" alt="" className='relative h-[407px] w-[236px]  left-[260px] top-[450px]' />
        </button>
        <button>
        <img src="/assets/project3.png" alt="" className='relative h-[272px] w-[236px]  left-[320px] top-[450px]' />
        </button>
        <button>
        <img src="/assets/project4.png" alt="" className='relative h-[293px] w-[236px]  left-[270px] top-[150px]' />
        </button>
        </div>
        
    </div>
    
        
    </>
  )
}

export default Projects