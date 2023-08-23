import React from 'react'
import imgOne from '../assets/mainImgOne.jpg'
import imgTwo from '../assets/mainImgtwo.jpg'
import imgThree from '../assets/mainImgThree.jpg'
import imgFour from '../assets/mainImgFour.jpg'
import imgFive from '../assets/mainImgfive.jpg'

const Main = () => {
  return (
    <div className=' w-full h-auto grid gap-3 grid-cols-1 z-30    lg:h-auto lg:grid-cols-2 '>

      <div className='h-[100%] w-[85%]  mx-auto  grid grid-cols-2 gap-2   lg:w-[100%]  lg:grid-cols-12 ' >
        <div className=' flex justify-center items-center  lg:col-span-4 '>
          <img src={imgOne} className='h-[90%] lg:h-[100%]  w-[100%]' alt="" />
        </div>
        <div className=' flex items-center lg:col-span-8  '>
          <img src={imgTwo} className=' lg:h-[100%]' alt="" />
        </div>
      </div>

      <div className='grid grid-rows-2 gap-2 justify-center lg:justify-normal '>
        <div className='grid grid-cols-2 gap-1 mx-auto h-72 lg:grid-cols-12 lg:w-[100%] lg:h-[100%] '>
          <div className='h-72 lg:col-span-7'>
            <img src={imgFour} className='h-72 w-[100%] lg:h-[22.7rem]' alt="" />
          </div>
          <div className='h-72 lg:col-span-5'>
            <img src={imgThree} className='h-72 lg:w-[100%] lg:h-[22.7rem] ' alt="" />
          </div>
        </div>
        <div className='max-w-[900px]  lg:w-[100%] lg:h-full'>
          <img src={imgFive} className=' mx-auto lg:h-full' alt="" />
        </div>

      </div>
    </div>
  )
}

export default Main
