import React from 'react'
import fbIcon from '../assets/facebook.png'
import igIcon from '../assets/icons8-instagram-208 2.png'


const Footer = () => {
  return (
    <div className='bg-black w-full h-[150px] relative'>
        <div className='flex absolute lg:top-16 md:top-8 md:right-[50%] gap-5 top-14 right-[45%]'>
            <a href=''><img src={fbIcon} className='h-[15px]'/></a>
            <a href=''><img src={igIcon} className='h-4 w-4'/></a>
        </div>
        <p className='text-gray-300 text-[12px] md:text-sm text-center text-wrap absolute lg:top-24 md:top-14 xl:right-[44%] lg:right-[40%] md:right-[40%] right-[25%] top-20'>© Copyright 2024 - Himmels Zenith</p>
    </div>
  )
}

export default Footer