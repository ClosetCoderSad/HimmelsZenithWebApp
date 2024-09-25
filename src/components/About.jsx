import React from 'react'
import aboutImg1 from '../assets/image 15.png'
import aboutImg2 from '../assets/image 16.png'
import aboutImg3 from '../assets/image 14.png'
import instaIcon from '../assets/instagram icon.svg'


const About = () => {
  return (
    <div className='h-fit w-full pb-12' id='about'>
        <div className='w-full mt-28 mb-10'>
        <p className='text-2xl text-center'>To know latest trend sets follow Instagram</p>
        </div>
        <div className='flex flex-row w-full relative'>
            <img src={aboutImg1} className='w-[540px] opacity-85'/>
            <img src={aboutImg2} className='w-[540px] opacity-85'/>
            <img src={aboutImg3} className='w-[540px] opacity-85'/>
            <a href=''><img src={instaIcon} className='h-20 w-20 absolute right-[50%] top-[44%] cursor-pointer'/></a>
        </div>
    </div>
  )
}

export default About