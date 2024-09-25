import React from 'react'
import fbIcon from '../assets/facebook.png'
import igIcon from '../assets/icons8-instagram-208 2.png'


const Footer = () => {
  return (
    <div className='bg-black w-full h-[150px] relative'>
        <div className='flex absolute top-16 right-[50%] gap-5'>
            <a href=''><img src={fbIcon} className='h-[15px]'/></a>
            <a href=''><img src={igIcon} className='h-4 w-4'/></a>
        </div>
        <p className='text-gray-300 text-sm text-center text-wrap absolute top-24 right-[44%]'>© Copyright 2024 - Himmels Zenith</p>
    </div>
  )
}

export default Footer