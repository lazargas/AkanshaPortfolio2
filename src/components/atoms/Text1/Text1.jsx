import React from 'react'
import style from "./Text1.module.css"

const Text1 = () => {
  return (
    <div className='flex'>
    <div className={style.Text1}>
    FROM GRAPHIC DESIGNING TO UI/UX I’M SKILLED IN ALL THINGS WEB DESIGN AND PIZZA MAKING
    </div>
    <img src="/assets/pizza.png" className='relative top-5 ' alt="" />
    </div>
  )
}

export default Text1