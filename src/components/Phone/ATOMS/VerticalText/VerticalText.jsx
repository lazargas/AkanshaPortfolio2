import React,{useState,useEffect} from 'react'
import {motion,useScroll} from "framer-motion"

const VerticalText = ({text,padding}) => {
  const [h, setH] = useState(0);

  useEffect(() => {
    var he = window.innerWidth;
    setH(he);
    console.log(he);
  }, []);

  const {scrollProgress} = useScroll();

  

  return (
    <motion.div 
    initial={{ opacity: 0,
    fontSize:"28px",
    color:"#fff"
    }}
  whileInView={{ opacity: 1,
  fontSize:"40px",
  overflow:"hidden",
  color:scrollProgress
  }}
    className={`w-full pl-5 mt-10 overflow-x-hidden h-12 not-italic font-tex text-3xl leading-[45px] p-[${padding}px]  text-[#ECDAD8] z-[1] bg-[#20201e]  cursor-none `}>
    {text}
    </motion.div>
  )
}

export default VerticalText

//hover:text-4xl hover:z-[2] hover:h-12 hover:text-[#cc66f0] hover:transition-all hover:duration-[0.6s] hover:ease-[ease]