import React from 'react'

const Footer = () => {
  return (
    <div className='w-screen h-auto p-3 bg-[#3E3A3A]items-center px-5 ' >
      <div className='text-center text-base text-white my-3'>
          Design by Akansha Singh | Made by Akarsh
      </div>
      <div className='flex justify-center text-xs text-white'>
          Copyright
          <div className='mx-2 h-[12px]'>
            <img className='h-full' src="/assets/copyright.png" alt="" />
          </div>
          All rights reserved.
      </div>
    </div>
  )
}

export default Footer