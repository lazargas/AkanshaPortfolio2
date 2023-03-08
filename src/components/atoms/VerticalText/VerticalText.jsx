import React from 'react'

const VerticalText = ({text}) => {
  return (
    <div className='absolute w-[550px]  h-12 not-italic font-semibold text-4xl leading-[45px] text-[#ECDAD8] -rotate-90 font-sora z-[1] bg-[#20201e] hover:text-5xl hover:z-[2] hover:h-12 hover:text-[#cc66f0] hover:transition-all hover:duration-[0.4s] hover:ease-[ease]'  >
    {text}
    </div>
  )
}

export default VerticalText