import Navbar from '@/components/organisms/Navbar/Navbar';
import '@/styles/globals.css'
import Head from "next/head";
import {motion} from "framer-motion";
import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");

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
    <div>
    <Head>
    <style>
  @import url('https://fonts.googleapis.com/css2?family=Bakbak+One&family=Faustina:wght@300&family=Happy+Monkey&family=Poppins:ital,wght@0,400;1,300&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Bakbak+One&family=Faustina:wght@300&family=Happy+Monkey&family=Poppins:ital,wght@0,400;1,300&family=Sora&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Bakbak+One&family=Faustina:wght@300&family=Happy+Monkey&family=Poppins:ital,wght@0,400;1,300&family=Sora&display=swap');
  
</style>
    </Head>
    
    <Component {...pageProps} />
    </div>
  )
}
