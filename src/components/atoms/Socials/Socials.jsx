import React from 'react'

const Socials = () => {
  return (
    <>
    <ul className='flex' >
    <li>
     <a href="https://www.linkedin.com/in/akarsh-srivastava-b74490203/">
    <img src="/assets/link.png" alt="linkedin" className='h-[65px] w-[65px]  p-4 hover:invert-[10] hover:transition-all duration-[0.5s] ease-[ease-out]  '/>
    </a>
   </li>
  <li className="email">
    <a href="mailto:akanshasingh95720@gmail.com">
      <img src="/assets/email.png" alt="gmail" className='h-[65px] w-[65px] p-4 hover:invert-[10] hover:transition-all duration-[0.5s] ease-[ease-out] '  />
    </a>
  </li>
  <li className='hover:invert-[10] hover:transition-all duration-[0.5s] ease-[ease-out] ' >
    <a href="https://www.instagram.com/akarshsrivastv/">
    <img src="/assets/insta.png" alt="instagram" className='h-[65px] w-[65px] p-4 '/>
    <img src="/assets/dot.png" alt="" className='relative left-[28px] bottom-[37px] h-[9px]' />
    </a>
  </li>
   
   
</ul>
    </>
  )
}

export default Socials