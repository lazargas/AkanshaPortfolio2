import React from 'react'
import style from "./Horizontal.module.css"

const VerticalText = ({text, colored}) => {
  return (
    <p className={style.verticaltext} style={{color:colored}} >
    {text}
    </p>
  )
}

export default VerticalText