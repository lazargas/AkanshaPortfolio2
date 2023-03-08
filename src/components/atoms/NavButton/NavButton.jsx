import React from 'react'
import {Link} from 'react-scroll'

const NavButton = ({text,Name}) => {
  return (
    <div>
        <button className='w-[162px] h-[39px] not-italic font-poppins text-xl leading-[30px] text-[#CC66F0]' >
        <Link to={Name} smooth={true} duration={500}>
            {text}
          </Link>
        </button>
    </div>
  )
}

export default NavButton