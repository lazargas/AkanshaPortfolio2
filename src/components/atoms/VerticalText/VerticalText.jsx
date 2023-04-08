import React from 'react'
import style from "./VertixalText.module.css"

const VerticalText = ({text}) => {
  return (
    <p className={style.verticaltext}  >
    {text}
    </p>
  )
}

export default VerticalText