import React from 'react'

const Socials = () => {
  return (
    <>
    <ul className='flex' >
  <li className="email">
    <a href="mailto:akanshasingh95720@gmail.com">
      <img src="/assets/gmail2.png" alt="gmail" className='h-[75px] w-[75px] invert-[100] p-4 hover:text-aqua '  />
    </a>
  </li>
  <li>
    <a href="https://www.instagram.com/akarshsrivastv/">
    <img src="/assets/instagram2.png" alt="instagram" className='h-[75px] w-[75px] invert-[100] p-4 '/>
    </a>
  </li>
   
   <li>
     <a href="https://www.linkedin.com/in/akarsh-srivastava-b74490203/">
    <img src="/assets/linkedin2.png" alt="linkedin" className='h-[65px] w-[65px] invert-[100] p-4 '/>
    </a>
   </li>
</ul>
    </>
  )
}

export default Socials