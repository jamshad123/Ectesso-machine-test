import React from 'react'
import imageOne from '../assets/asideOne.jpg'
import { HiArrowLongRight } from 'react-icons/hi2'
import { asideData } from '../data'

const Aside = () => {
    return (
        <div className='  flex flex-col gap-3'>
            {
                asideData.map((item, i) => (
                    <div key={i} className={` h-40 bg-[#ecfeff] p-3 rounded-3xl flex flex-col justify-evenly  ${item.opacity}`}>
                        <div className=' flex gap-2'>
                            {item.svg}
                            <div>
                                <p className='text-[#0080A4] font-semibold  md:text-lg  lg:text-xl '>{item.title}</p>
                            </div>
                        </div>
                        <div className='w-[80%] mx-auto flex  h-36'>
                            <div className='text-lg w-[100%] lg:w-[90%]'>
                                <p className='font-semibold  md:text-sm text-sm lg:text-base leading-5'>{item.subTitle}</p>
                                <button className='px-3 mt-3 py-1 text-white bg-[#0080a4] flex items-center justify-center gap-1 rounded-3xl text-[.7rem]'>READ MORE <span><HiArrowLongRight className='text-sm' /></span></button>
                            </div>
                        </div>
                    </div>

                ))
            }
        </div>
    )
}

export default Aside
