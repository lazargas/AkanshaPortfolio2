import React from 'react'
import {Link} from 'react-scroll'

const NavButton = ({text,Name}) => {
  return (
    <div>
        <button className=' font-rajdhani tracking-widest cursor-none h-auto not-italic text-xl leading-[30px] text-[#CC66F0] hover:text-[#fff] hover:transition-all duration-[0.5s] ease-[ease] ' >
        <Link to={Name} smooth={true} duration={500}>
            {text.toUpperCase()}
          </Link>
        </button>
    </div>
  )
}

export default NavButton