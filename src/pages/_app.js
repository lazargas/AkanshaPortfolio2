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
    
      <motion.div
       
        className="base-page-size"
      >
       <AkanshaProvider>
<div>
    <Head>
    <style>
  @import url('https://fonts.googleapis.com/css2?family=Bakbak+One&family=Faustina:wght@300&family=Happy+Monkey&family=Poppins:ital,wght@0,400;1,300&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Bakbak+One&family=Faustina:wght@300&family=Happy+Monkey&family=Poppins:ital,wght@0,400;1,300&family=Sora&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Bakbak+One&family=Faustina:wght@300&family=Happy+Monkey&family=Poppins:ital,wght@0,400;1,300&family=Sora&display=swap');
  
</style>
    </Head>
    <AnimatePresence wait initial={false} >
    <Component {...pageProps} />
    </AnimatePresence>
    </div>
    </AkanshaProvider>
      </motion.div>
    
    
    
  )
}


// key={router.route}
// initial="initialState"
// animate="animateState"
// exit="exitState"
// transition={{
//   duration: 0.75,
// }}
// variants={{
//   initialState: {
//     opacity: 0,
//     clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
//   },
//   animateState: {
//     opacity: 1,
//     clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
//   },
//   exitState: {
//     clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
//   },
// }}
