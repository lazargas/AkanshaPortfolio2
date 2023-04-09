import React from 'react'
import style from "./VertixalText.module.css"
import {motion,useScroll} from "framer-motion"

const VerticalText = ({text}) => {
  const {scrollProgress} = useScroll();
  return (
    <motion.div 
    initial={{ opacity: 0,
      color:"#fff",
    }}
  whileInView={{ opacity: 1,
  color:scrollProgress
  }}
    >
     <p className={style.verticaltext}  >
    {text}
    </p>
    </motion.div>
   
  )
}

export default VerticalText