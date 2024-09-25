import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import navLogo from '../assets/black text logo.png'
import searchIcon from '../../../assets/search-interface-symbol 2.svg'
import loveIcon from '../../../assets/love 1.svg'
import cartIcon from '../../../assets/shopping-cart 1.svg'

const Navbar = () => {
    const [nav, setNav] = useState(true);
    
    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(1)
    }



  return (
    <div>
    <div className='h-[110px] w-full flex flex-row items-center justify-between relative'>
        <div className='pl-9 cursor-pointer ease-in-out duration-500' onClick={toggleNav}>
            {nav? <AiOutlineMenu size={34}/> : <AiOutlineClose size={34}/>}
        </div>
        <div className='navlogo'>
            <img src={navLogo} className='h-[65px]'/>
        </div>
        <div className='flex flex-row pr-9 gap-6'>
            <img src={searchIcon} className='h-[34px] w-[34px] cursor-pointer'/>
            <img src={loveIcon} className='h-[34px] w-[34px] cursor-pointer'/>
            <img src={cartIcon} className='h-[34px] w-[34px] cursor-pointer'/>
        </div>
    </div>
    <div className={nav?'hidden':'fixed h-full w-[240px] flex flex-col bg-white text-center ease-in-out duration-500 z-10'}>
        <ul>
            <li><a href='#hero' className='text-[28px] leading-[70px] hover:text-gray-500 hover:underline decoration-gray-300 underline-offset-8' onClick={closeNav}>Home</a></li>
            <li><a href='#category' className='text-[28px] leading-[70px] hover:text-gray-500 hover:underline decoration-gray-300 underline-offset-8' onClick={closeNav}>Category</a></li>
            <li><a href='#about' className='text-[28px] leading-[70px] hover:text-gray-500 hover:underline decoration-gray-300 underline-offset-8' onClick={closeNav}>About</a></li>
        </ul>
    </div>
    </div>
  )
}

export default Navbar