import React from 'react'
import categorywrapper1 from '../assets/wrapperImg.png'
import categorywrapper2 from '../assets/winter fit.png'


const Category = () => {
  return (
    <div className='h-fit' id='category'>
        <div className='w-full text-center mt-4'>
            <h1 className='font-bebas text-[40px]'>Summer Slam</h1>
        </div>
        <div className='relative'>
            <img src={categorywrapper1} className='w-full h-[670px] inset-0 bg-gradient-to-b from-transparent via-black/90 to-black'/>
            <div className='absolute bottom-10 right-[50%]'>
            <a href='' target='_blank' className='bg-gray-800 text-white text-[18px] py-[12px] px-[20px] rounded-3xl hover:opacity-85 ease-in-out duration-300'>Shop Now</a>
            </div>
        </div>
        <div className='flex flex-row gap-14 h-fit w-full mt-24 mb-12'>
            <div className='pl-12'>
                <img src={categorywrapper2} className='h-400px w-400px'/>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='font-bebas text-[40px]'>Winter Couture</h1>
                <p className='text-2xl text-wrap'>
                Discover our collection of comfortable hoodies for men, including jerseys and knitted styles finished with signature prints, patches, and embroidery.
                </p>
                <div className='mt-6'>
                <a href='' target='_blank' className='bg-gray-800 text-white text-[18px] py-[12px] px-[20px] rounded-3xl hover:opacity-85 ease-in-out duration-300'>Shop Now</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category