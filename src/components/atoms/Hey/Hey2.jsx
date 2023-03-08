import React from 'react'
import style from "./Hey2.module.css"

const Hey2 = () => {
  return (
    <div className={style.Container} >
         <ul>
            <li className={style.list_item} >
                <div className={style.element} >H</div>
            </li>
            <li className={style.list_item} >
                <div className={style.element} >E</div>
            </li>
            <li className={style.list_item} >
                <div className={style.element} >Y</div>
            </li>
            {/* <li className={style.list_item} >
                <div className={style.element} > </div>
            </li>
            <li className={style.list_item} >
                <div className={style.element} >!</div>
            </li> */}
        </ul>

    </div>
  )
}

export default Hey2