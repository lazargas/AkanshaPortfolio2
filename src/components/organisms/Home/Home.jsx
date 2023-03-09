import About from '@/components/molecules/About/About'
import Footer from '@/components/molecules/Footer/Footer'
import Intro from '@/components/molecules/Intro/Intro'
import Projects from '@/components/molecules/Projects/Projects'
import Skills from '@/components/molecules/Skills/Skills'
import React from 'react'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import Bounce from 'react-reveal/Bounce';
import { Animator, ScrollContainer,Move,Sticky ,ScrollPage,batch,FadeIn,StickyIn,MoveOut,FadeOut,ZoomIn,ZoomInScrollOut } from 'react-scroll-motion'

const Home = () => {
  const ZoomInScrollOut = batch(FadeIn(), Move());
  return (
    
     <div className='absolute w-full h-[500vh]  bg-[#20201e]' >
      <Fade bottom duration={1250} >
      <div className='' ><Intro/></div>
      {/* <div className='' ><About/></div> */}
      <div className='' ><Skills/></div>
      <div className='' ><Projects/></div>
      </Fade>
      <div className='' ><Footer/></div>
      
     </div>
    
    
    
     
  )
}

export default Home

{/* <ScrollContainer>
        <ScrollPage page={0}>
        <Animator animation={ZoomInScrollOut}>
          <Intro/>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
          <About/>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
        <Animator animation={ZoomInScrollOut}>
          <Skills/>
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
        <Animator animation={ZoomInScrollOut}>
          <Projects/>
          </Animator>
        </ScrollPage>
        
          
             
    </ScrollContainer> */}