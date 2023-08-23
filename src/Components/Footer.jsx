import React from 'react'
import imgOne from '../assets/Footerimg.jpg'
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from 'react-icons/hi'

const Footer = () => {
  return (
    <div className='w-[97vw] h-[100vh] mx-auto '>
      <div className='w-full h-36 flex flex-col items-center lg:mt-40 lg:h-48 lg:justify-evenly  '>
        <p className='text-2xl text-[#3D4660] font-semibold lg:text-6xl lg:font-light lg:tracking-widest' >FIRM ADVANTAGES</p>
        <p className='font-light text-[#3D4660] lg:font-medium lg:text-lg lg:tracking-widest '>PROACTIVE,UNIQUE,COLLABORATIVE,AND SECURE</p>
        <div className='flex gap-8 text-xs w-[90%] h-9 text-[#B3B3B3] justify-evenly items-center border-b-2 font-bold'><span className='text-black relative'><div className='w-[150%] h-[0.15rem] bg-black absolute top-[1.55rem] right-[-0.8rem]'></div> PROACTIVE</span><span>UNIQUE</span><span>COLLABORATIVE</span><span>SECURE</span></div>
      </div>

      <div className='flex flex-col h-[68%] w-[60%] mx-auto gap-4 lg:flex-row lg:justify-evenly lg:mt-3 '>
        <div className='relative'>
          <div className='border-2 border-gray-400 w-[300px] h-56'>
            <img src={imgOne} className='w-[300px] h-auto absolute -top-3 left-3' alt="" />
          </div>
        </div>
        <div className=' w-96 h-96 mt-3 flex flex-col justify-evenly lg:h-52 lg:gap-3 '>
          <div className='lg:w-[80%]'>
            <p className='text-sm font-medium'>We pride ourselves on shortening the length of time it takes to finalize the divorce. A quicker time frame for resolution means that both parties are free to move on, but most importantly it means less turmoil for the children.</p>
          </div>
          <p className='text-[0.65rem] text-[#40678E]'>1/4</p>
          <div className='flex gap-2'>
            <div className='px-4 py-1 border text-gray-400'>
              <span><HiOutlineArrowNarrowLeft /></span>
            </div>
            <div className='px-4 py-1 border border-[#40678E] text-[#40678E]'>
              <span><HiOutlineArrowNarrowRight /></span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
