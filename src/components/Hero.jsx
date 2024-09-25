import React from 'react'
import heroimg1 from '../assets/img1.png'
import heroimg2 from '../assets/img2.png'
import heroimg3 from '../assets/img3.png'
import likeIcon from '../assets/love 5.svg'

const Hero = () => {
  return (
    <div className='h-screen' id='home'>
        <div className='pt-7'>
            <h1 className='font-bebas text-center text-[40px]'>Bestseller</h1>
        </div>
        <div className='flex flex-row justify-center gap-12'>
            <div>
                <div className='relative hover:opacity-65 cursor-pointer hover:scale-105 ease-in-out duration-500'>
                    <img src={heroimg1} className='h-[434px] w-[350px]'/>
                    <img src={likeIcon} className='absolute top-3 right-3'/>
                </div>    
                <div className='w-[350px] flex justify-between font-bebas pt-3 text-[18px]'>
                    <p>HZ Ed.1</p>
                    <p>BDT 400</p>
                </div>
            </div>
            <div>
                <div className='relative hover:opacity-65 cursor-pointer hover:scale-105 ease-in-out duration-500'>
                    <img src={heroimg2} className='h-[434px] w-[350px]'/>
                    <img src={likeIcon} className='absolute top-3 right-3'/>
                </div>
                <div className='w-[350px] flex justify-between font-bebas pt-3 text-[18px]'>
                    <p>HZ Ed.2</p>
                    <p>BDT 400</p>
                </div>
            </div>
            <div>
                <div className='relative hover:opacity-65 cursor-pointer hover:scale-105 ease-in-out duration-500'>
                    <img src={heroimg3} className='h-[434px] w-[350px]'/>
                    <img src={likeIcon} className='absolute top-3 right-3'/>
                </div>
                <div className='w-[350px] flex justify-between font-bebas pt-3 text-[18px]'>
                    <p>HZ Ed.3</p>
                    <p>BDT 400</p>
                </div>
            </div>
        </div>
        <div className='w-full text-center mt-8'>
            <a href='' target='_blank' className='bg-gray-800 text-white text-[18px] py-[12px] px-[20px] rounded-3xl hover:opacity-85 ease-in-out duration-300'>View More</a>
        </div>
    </div>
  )
}

export default Hero