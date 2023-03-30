import Navbar from '@/components/organisms/Navbar/Navbar';
import '@/styles/globals.css'
import Head from "next/head";
import {motion} from "framer-motion";
import { useState, useEffect } from 'react';
import { AkanshaProvider } from '@/Context/Akansha';
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";


export default function App({ Component, pageProps }) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");
  
  const router = useRouter();
  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
  }


  return (
    
     
       <AkanshaProvider>
<div>
    <Head>
    <style>
  @import url('https://fonts.googleapis.com/css2?family=Bakbak+One&family=Faustina:wght@300&family=Happy+Monkey&family=Poppins:ital,wght@0,400;1,300&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Bakbak+One&family=Faustina:wght@300&family=Happy+Monkey&family=Poppins:ital,wght@0,400;1,300&family=Sora&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Bakbak+One&family=Faustina:wght@300&family=Happy+Monkey&family=Poppins:ital,wght@0,400;1,300&family=Sora&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Bakbak+One&family=Faustina:wght@300&family=Happy+Monkey&family=Poppins:ital,wght@0,400;1,300&family=Rajdhani:wght@500;600;700&family=Rubik+Iso&family=Sora&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&display=swap');
</style>
    </Head>
    <AnimatePresence>
    <Component key={router.pathname} {...pageProps} />
    </AnimatePresence>
    </div>
    </AkanshaProvider>
      
    
    
    
  )
}


