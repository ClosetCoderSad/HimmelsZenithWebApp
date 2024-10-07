import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import navLogo from '../assets/black text logo.png'
import searchIcon from '../assets/search-interface-symbol 2.svg'
import loveIcon from '../assets/love 1.svg'
import cartIcon from '../assets/shopping-cart 1.svg'

const Navbar = () => {
    const [nav, setNav] = useState(true);
    
    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(true)
    }



  return (
    <div>
    <div className='h-[80px] md:h-[90px] lg:h-[90px] xl:h-[110px] w-full flex flex-row items-center justify-between relative'>
        <div className='pl-7 md:pl-9 cursor-pointer ease-in-out duration-500 z-20' onClick={toggleNav}>
            {nav? <AiOutlineMenu className='xl:h-[34px] xl:w-[34px] lg:h-[30px] lg:w-[30px] md:h-[29px] md:w-[29px] h-[27px] w-[27px]'/> : <AiOutlineClose className='xl:h-[34px] xl:w-[34px] lg:h-[30px] lg:w-[30px] md:h-[29px] md:w-[29px] h-[27px] w-[27px]'/>}
        </div>
        <div className='navlogo'>
            <img src={navLogo} className='hidden md:flex md:h-[58px] lg:h-[58px] xl:h-[65px]'/>
        </div>
        <div className='flex flex-row pr-7 md:pr-9 md:gap-6 gap-3'>
            <img src={searchIcon} className='h-[27px] w-[27px] md:h-[29px] md:w-[29px] lg:h-[30px] lg:w-[30px] xl:h-[34px] xl:w-[34px] cursor-pointer'/>
            <img src={loveIcon} className='h-[27px] w-[27px] md:h-[29px] md:w-[29px] lg:h-[30px] lg:w-[30px] xl:h-[34px] xl:w-[34px] cursor-pointer'/>
            <img src={cartIcon} className='h-[27px] w-[27px] md:h-[29px] md:w-[29px] lg:h-[30px] lg:w-[30px] xl:h-[34px] xl:w-[34px] cursor-pointer'/>
        </div>
    </div>
    <div className={nav?'hidden':'fixed top-0 h-full w-[170px] md:w-[240px] flex flex-col bg-white text-center ease-in-out duration-500 z-10'}>
        <ul className='mt-16'>
            <li><a href='#hero' className='text-[23px] leading-[50px] md:text-[28px] md:leading-[70px] hover:text-gray-500 hover:underline decoration-gray-300 underline-offset-8' onClick={closeNav}>Home</a></li>
            <li><a href='#category' className='text-[23px] leading-[50px] md:text-[28px] md:leading-[70px] hover:text-gray-500 hover:underline decoration-gray-300 underline-offset-8' onClick={closeNav}>Category</a></li>
            <li><a href='#about' className='text-[23px] leading-[50px] md:text-[28px] md:leading-[70px] hover:text-gray-500 hover:underline decoration-gray-300 underline-offset-8' onClick={closeNav}>About</a></li>
        </ul>
    </div>
    </div>
  )
}

export default Navbar