import React from 'react'
import imgOne from '../assets/Headerimg.jpg'
import { TbPointFilled } from 'react-icons/tb'
import Aside from './Aside'
import Main from './Main'

const Header = () => {
    return (
        <>
            <div className=' w-[97vw] h-auto lg:h-[100vh] mx-auto   flex flex-col gap-3 lg:flex-row lg:justify-center  items-center '>
                {/* imagediv */}
                <div className=' mt-3 w-[530px]  h-auto'>
                    <div className=' flex  flex-col items-center lg:items-end gap-3  '>
                        <div className='lg:w-[69%] lg:flex lg:justify-start '>
                            <div className=''>
                                <p className='text-2xl lg:text-3xl font-semibold '>Benefits of</p>
                                <p className='text-2xl lg:text-3xl font-semibold '> Singlet Oxygen</p>
                            </div>
                        </div>
                        <div className=' w-[370px]'>
                            <div>
                                <img src={imgOne} alt="" />
                            </div>

                        </div>
                    </div>

                </div>
                {/* line */}
                <div className='flex justify-center items-center lg:w-10  lg:h-96 lg:items-start '>
                    <div class=" h-[200px] min-h-[1em] w-0.5  bg-gradient-to-b from-[#33B6CC]  opacity-100 dark:opacity-50 relative"> <span className='absolute left-[-.66rem] top-[-1rem] text-[#0080A4]'><TbPointFilled size={23} /></span><span className='absolute left-[-.66rem] top-[9rem] text-[#97d3e3]'><TbPointFilled size={23} /></span></div>
                </div>

                {/* boxes */}
                <div className=' lg:mt-40 z-10'>
                        <Aside />
                </div>
            </div>


        </>
    )
}

export default Header
