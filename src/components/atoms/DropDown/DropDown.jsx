import { AkanshaContext } from '@/Context/Akansha'
import React,{useContext} from 'react'
import {Link} from 'react-scroll'

const DropDown = () => {
  const {open,setOpen} = useContext(AkanshaContext);
  const handleclick = () => {
     if(open)
     setOpen(false);
     else
     setOpen(true);
  }
  const handleclickbutton = () => {
    setOpen(false);
 }
 let pdfUrl = "/assets/resume/RESUME.pdf";
  let fileName = "resume";
  const handleClick = () => {
    fetch(pdfUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob], {type: 'application/pdf'}));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      });
  }
  return (
    <div className=' z-[5] fixed h-screen w-full bg-[#20201e] ' >
           <button onClick={handleclick} >
            <img src="/assets/cross.png" className='absolute left-5 h-[40px]' alt="" />
           </button>
          <ul className='relative font-grand tracking-widest text-center top-[30vh]  not-italic font-normal text-xl leading-[45px] text-[#CC66F0]' >
          <li>
          <Link className='hover:text-white  cursor-none ' onClick={handleclickbutton}  to="home" smooth={true} duration={500}>
            HOME
          </Link>
          </li>
          
            <li>
            <Link className='hover:text-white  cursor-none ' onClick={handleclickbutton} to="about" smooth={true} duration={500}>
            ABOUT
          </Link>
            </li>
            <li>
            <Link className='hover:text-white  cursor-none ' onClick={handleclickbutton} to="skills" smooth={true} duration={500}>
            SKILLS
          </Link>
            </li>
            <li>
            <Link className='hover:text-white  cursor-none ' onClick={handleclickbutton} to="projects" smooth={true} duration={500}>
            PROJECTS
          </Link>
            </li>
            <li>
            <Link className='hover:text-white  cursor-none ' onClick={handleclickbutton} to="contact" smooth={true} duration={500}>
            CONTACT
          </Link>
            </li>
            <li onClick={handleClick} className='hover:text-white hover:ease-in  cursor-none ' >DOWNLOAD RESUME</li>
          </ul>
    </div>
  )
}

export default DropDown