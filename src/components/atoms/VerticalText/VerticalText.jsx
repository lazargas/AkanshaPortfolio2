import React from 'react'

const VerticalText = ({text}) => {
  return (
    <div className='absolute w-[550px] pl-5  h-12 not-italic font-tex text-4xl leading-[45px] text-[#ECDAD8] -rotate-90 z-[1] bg-[#20201e] hover:text-5xl hover:z-[2] hover:h-12 hover:text-[#cc66f0] hover:transition-all hover:duration-[0.6s] '  >
    {text}
    </div>
  )
}

export default VerticalText