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
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Navbar from '../Navbar/Navbar'


const Home = () => {
  const ZoomInScrollOut = batch(FadeIn(), Move());
  return (
    <div className='w-full h-[500vh]  bg-[#20201e]' >
    <Fade duration={1250} >
    <div><Intro/></div>
    <div><About/></div>
    <div><Skills/></div>
    <div><Projects/></div>
    </Fade>
    <div><Footer/></div>
    </div>
     
      
    //   <Parallax className='w-full h-[500vh]  bg-[#20201e]' pages={6} >

    //   <ParallaxLayer offset={0}>
      
    //   <div className='' ><Intro/></div>
    //   </ParallaxLayer>
    //   <ParallaxLayer offset={1} >
    //   <div className=''><About/></div>
    //   </ParallaxLayer>
    //   <ParallaxLayer offset={3}>
    //   <div className='' ><Skills/></div>
    //   </ParallaxLayer>
    //   <ParallaxLayer offset={4}>
    //   <div className='' ><Projects/></div>
    //   </ParallaxLayer>
    //   <ParallaxLayer offset={5} >
    //   <div className='' ><Footer/></div>
    //   </ParallaxLayer>
    // </Parallax>
     
    
    
    
     
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