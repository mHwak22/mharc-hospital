import { ChatBubbleLeftRightIcon, DevicePhoneMobileIcon } from '@heroicons/react/20/solid'
import { MapIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Footer = () => {
  return (
    <div className='pt-[8rem] pb-[4rem] bg-[#72a2f7]'>
        <div className='grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[2rem]'>
            <div className='flex items-center space-x-6'>
                <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
                    <MapIcon className='md:w-[5rem] md:h-[5rem] w-[3rem] h-[3rem] text-black'/>
                </div>
                <div className='text-[25px] mb-[0.2rem] font-semibold text-white'>
                    <h1>Address</h1>
                    <p className='text-[17px] w-[100%] text-white opacity-60'>The Queen's Walk, Bishop's, London SE1 7PB, United Kingdom.</p>
                </div>
            </div>
            <div className='flex items-center space-x-6'>
                <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
                    <DevicePhoneMobileIcon className='md:w-[5rem] md:h-[5rem] w-[3rem] h-[3rem] text-black'/>
                </div>
                <div className='text-[25px] mb-[0.2rem] font-semibold text-white'>
                    <h1>Phone</h1>
                    <p className='text-[17px] w-[100%] text-white opacity-60'> + (91) 85278 52705</p>
                </div>
            </div>
            <div className='flex items-center space-x-6'>
                <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
                    <ChatBubbleLeftRightIcon className='md:w-[5rem] md:h-[5rem] w-[3rem] h-[3rem] text-black'/>
                </div>
                <div className='text-[25px] mb-[0.2rem] font-semibold text-white'>
                    <h1>Email</h1>
                    <p className='text-[17px] w-[100%] text-white opacity-60'>info@mharc.health</p>
                </div>
            </div>
        </div>
        <div className='w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-around'>
            <div className='text-[18px] mb-[2rem] md:mb-0 text-white opacity-20'>
                mHwak 2024 | All Rights Reserved
            </div>
            <div className='flex items-center space-x-10'>
                <p className='text-[16px] text-white opacity-20'>Terms & Condition</p>
                <p className='text-[16px] text-white opacity-20'>Privacy Policy</p>
                <p className='text-[16px] text-white opacity-20'>Sitemap</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
