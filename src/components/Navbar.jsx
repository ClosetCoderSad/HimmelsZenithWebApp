import React, { useState, useContext } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import navLogo from "../assets/Hlogo.jpg";
import searchIcon from "../assets/search-interface-symbol 2.svg";
import loveIcon from "../assets/love 1.svg";
import redHeartIcon from "../assets/heart.png";
import cartIcon from "../assets/shopping-cart 1.svg";
import { LovedItemsContext } from "../components/LovedItemsContext"; // Import context

const Navbar = () => {
  const { lovedItemsCount } = useContext(LovedItemsContext); // Use the context to access the loved items count
  const [nav, setNav] = useState(true);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(true);
  };

  return (
    <div>
      <div className="h-[80px] md:h-[90px] lg:h-[90px] xl:h-[110px] w-full flex flex-row items-center justify-between relative">
        <div className="navlogo">
          <img
            src={navLogo}
            className="hidden pl-7 md:pl-9 md:flex md:h-[58px] lg:h-[58px] xl:h-[65px]"
          />
        </div>

        <div
          className="md:hidden absolute top-6 left-7 cursor-pointer ease-in-out duration-500 z-20"
          onClick={toggleNav}
        >
          {nav ? (
            <AiOutlineMenu className="xl:h-[34px] xl:w-[34px] lg:h-[30px] lg:w-[30px] md:h-[29px] md:w-[29px] h-[27px] w-[27px]" />
          ) : (
            <AiOutlineClose className="xl:h-[34px] xl:w-[34px] lg:h-[30px] lg:w-[30px] md:h-[29px] md:w-[29px] h-[27px] w-[27px]" />
          )}
        </div>

        <div className="hidden md:block">
          <ul className="flex flex-row lg:gap-20 gap-8">
            <li>
              <a
                href="#hero"
                className="hover:cursor-pointer text-[20px] leading-[50px] lg:text-[23px] md:leading-[70px] hover:text-gray-500 hover:underline decoration-gray-300 underline-offset-8"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#category"
                className="hover:cursor-pointer text-[20px] leading-[50px] lg:text-[23px] md:leading-[70px] hover:text-gray-500 hover:underline decoration-gray-300 underline-offset-8"
              >
                Category
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:cursor-pointer text-[20px] leading-[50px] lg:text-[23px] md:leading-[70px] hover:text-gray-500 hover:underline decoration-gray-300 underline-offset-8"
              >
                About
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:cursor-pointer text-[20px] leading-[50px] lg:text-[23px] md:leading-[70px] hover:text-gray-500 hover:underline decoration-gray-300 underline-offset-8"
              >
                Orders
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-row pr-7 md:pr-9 md:gap-6 gap-3">
          <img
            src={searchIcon}
            className="h-[27px] w-[27px] md:h-[29px] md:w-[29px] lg:h-[30px] lg:w-[30px] xl:h-[34px] xl:w-[34px] cursor-pointer"
          />
          {/* Love Icon: changes color when lovedItemsCount > 0 */}
          <div className="relative">
            <img
              src={lovedItemsCount > 0 ? redHeartIcon : loveIcon} // Change heart icon
              className="h-[27px] w-[27px] md:h-[29px] md:w-[29px] lg:h-[30px] lg:w-[30px] xl:h-[34px] xl:w-[34px] cursor-pointer"
            />
            {/* Show counter only if loved items exist */}
            {lovedItemsCount > 0 && (
              <span className="absolute top-[-5px] right-[-10px] bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                {lovedItemsCount}
              </span>
            )}
          </div>

          <img
            src={cartIcon}
            className="h-[27px] w-[27px] md:h-[29px] md:w-[29px] lg:h-[30px] lg:w-[30px] xl:h-[34px] xl:w-[34px] cursor-pointer"
          />
        </div>
      </div>
      <div
        className={
          nav
            ? "hidden"
            : "fixed top-0 h-full w-[170px] md:w-[240px] flex flex-col bg-white text-center ease-in-out duration-500 z-10"
        }
      >
        <ul className="mt-16">
          <li>
            <a
              href="#hero"
              className="text-[23px] leading-[50px] md:text-[28px] md:leading-[70px] hover:text-gray-500 hover:underline decoration-gray-300 underline-offset-8"
              onClick={closeNav}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#category"
              className="text-[23px] leading-[50px] md:text-[28px] md:leading-[70px] hover:text-gray-500 hover:underline decoration-gray-300 underline-offset-8"
              onClick={closeNav}
            >
              Category
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-[23px] leading-[50px] md:text-[28px] md:leading-[70px] hover:text-gray-500 hover:underline decoration-gray-300 underline-offset-8"
              onClick={closeNav}
            >
              About
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
