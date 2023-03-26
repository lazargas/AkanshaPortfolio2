import Hey2 from '@/components/atoms/Hey/Hey2'
import Text1 from '@/components/Phone/ATOMS/Text1/Text1'
import Hey from '@/components/Phone/ATOMS/Hey/Hey2'
import React from 'react'
import Navbar from '@/components/Phone/molecules/Navbar/Navbar'
import Intro from '@/components/Phone/molecules/Intro/Intro'
import About from '@/components/Phone/molecules/About/About'
import Skills from '@/components/Phone/molecules/Skills/Skills'
import Projects from '@/components/Phone/ATOMS/Projects/Projects'
import { AkanshaContext } from '@/Context/Akansha'
import { useContext } from 'react'
import DropDown from '@/components/atoms/DropDown/DropDown'
import Contact from '@/components/Phone/ATOMS/Contract/Contact'
import Footer from '@/components/Phone/ATOMS/Footer/Footer'
import Fade from "react-reveal/Fade";

const HomePhone = () => {
  const {open,setOpen} = useContext(AkanshaContext);
  return (
    <div className='bg-[#20201e] w-full' >
     {open?<DropDown/>:<Navbar/>}
    
    <Intro/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    
    
    </div>
    
  )
}

export default HomePhone