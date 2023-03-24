import React from 'react'
import Hey2 from '../../ATOMS/Hey/Hey2'
import Text1 from '../../ATOMS/Text1/Text1'
import { AkanshaContext } from '@/Context/Akansha'
import { useContext } from 'react'

const Intro = () => {
  const {setOpen} = useContext(AkanshaContext);
  const handleclick = () => {
     setOpen(false);
  }
  return (
    <div name="home" className=' h-screen w-full flex gap-[1rem]'  >
         <div className='absolute pt-[125px] pl-14' >
            <Hey2/>
         </div>
         <div className="absolute top-[300px] left-[170px] " >
              <Text1/>
         </div>
    </div>
  )
}

export default Intro