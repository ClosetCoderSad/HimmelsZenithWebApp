import React, { useState, useContext } from "react";
import heroimg1 from "../assets/img1.png";
import heroimg2 from "../assets/img2.png";
import heroimg3 from "../assets/img3.png";
import heartUnfilled from "../assets/love 5.svg"; // Unfilled heart
import heartFilled from "../assets/heart.png"; // Filled red heart
import FadeInWrapper from "../animations/fadeInWrapper";
import { LovedItemsContext } from "../components/LovedItemsContext"; // Import context

const Hero = () => {
  const { toggleLove } = useContext(LovedItemsContext); // Use the context to access the toggle function

  // Separate states to track whether each heart is "loved"
  const [isLoved1, setIsLoved1] = useState(false); // First heart
  const [isLoved2, setIsLoved2] = useState(false); // Second heart
  const [isLoved3, setIsLoved3] = useState(false); // Third heart

  const handleToggleLove = (productNumber, isCurrentlyLoved) => {
    const toggleFunctions = [
      { state: isLoved1, setState: setIsLoved1 },
      { state: isLoved2, setState: setIsLoved2 },
      { state: isLoved3, setState: setIsLoved3 },
    ];

    const { setState } = toggleFunctions[productNumber];
    setState(!isCurrentlyLoved);
    toggleLove(!isCurrentlyLoved); // Call the global toggle function
  };

  return (
    <FadeInWrapper>
      <div className="h-fit mb-20" id="home">
        <div className="xl:pt-7 lg:pt-16 md:pt-1 md:pb-1">
          <h1 className="font-bebas text-center md:text-[40px] text-[33px]">
            Bestseller
          </h1>
        </div>
        <div className="flex lg:flex-row lg:justify-center xl:gap-11 lg:gap-7 lg:pt-7 md:flex-col md:items-center flex-col items-center">
          <div>
            <div className="md:inline-block lg:block relative hover:opacity-65 cursor-pointer hover:scale-105 ease-in-out duration-500">
              <img
                src={heroimg1}
                className="h-[210px] w-[160px] xl:h-[434px] xl:w-[350px] lg:h-[354px] lg:w-[270px] md:h-[290px] md:w-[206px]"
              />
              <img
                src={isLoved1 ? heartFilled : heartUnfilled} // Toggle between unfilled and filled heart
                className="h-[25px] w-[25px] md:h-[29px] md:w-[29px] lg:h-[30px] lg:w-[30px] xl:h-[34px] xl:w-[34px] absolute md:top-3 md:right-3 top-1.5 right-1.5"
                onClick={() => handleToggleLove(0, isLoved1)}
              />
            </div>
            <div className="xl:w-[350px] lg:w-[270px] md:w-[206px] w-[160px] flex justify-between font-bebas pt-3 md:text-[18px] text-[15px]">
              <p>HZ Ed.1</p>
              <p>BDT 400</p>
            </div>
          </div>

          <div>
            <div className="md:inline-block lg:block relative hover:opacity-65 cursor-pointer hover:scale-105 ease-in-out duration-500">
              <img
                src={heroimg2}
                className="mt-2 md:mt-0 h-[210px] w-[160px] xl:h-[434px] xl:w-[350px] lg:h-[354px] lg:w-[270px] md:h-[290px] md:w-[206px]"
              />
              <img
                src={isLoved2 ? heartFilled : heartUnfilled} // Toggle between unfilled and filled heart
                className="h-[25px] w-[25px] md:h-[29px] md:w-[29px] lg:h-[30px] lg:w-[30px] xl:h-[34px] xl:w-[34px] absolute md:top-3 md:right-3 top-1.5 right-1.5"
                onClick={() => handleToggleLove(1, isLoved2)}
              />
            </div>
            <div className="xl:w-[350px] lg:w-[270px] md:w-[206px] w-[160px] flex justify-between font-bebas pt-3 md:text-[18px] text-[15px]">
              <p>HZ Ed.2</p>
              <p>BDT 400</p>
            </div>
          </div>

          <div>
            <div className="md:inline-block lg:block relative hover:opacity-65 cursor-pointer hover:scale-105 ease-in-out duration-500">
              <img
                src={heroimg3}
                className="mt-2 md:mt-0 h-[210px] w-[160px] xl:h-[434px] xl:w-[350px] lg:h-[354px] lg:w-[270px] md:h-[290px] md:w-[206px]"
              />
              <img
                src={isLoved3 ? heartFilled : heartUnfilled} // Toggle between unfilled and filled heart
                className="h-[25px] w-[25px] md:h-[29px] md:w-[29px] lg:h-[30px] lg:w-[30px] xl:h-[34px] xl:w-[34px] absolute md:top-3 md:right-3 top-1.5 right-1.5"
                onClick={() => handleToggleLove(2, isLoved3)}
              />
            </div>
            <div className="xl:w-[350px] lg:w-[270px] md:w-[206px] w-[160px] flex justify-between font-bebas pt-3 md:text-[18px] text-[15px]">
              <p>HZ Ed.3</p>
              <p>BDT 400</p>
            </div>
          </div>
        </div>

        {/* "View More" Button */}
        <div className="w-full text-center xl:mt-8 lg:mt-12 md:mt-10 mt-6">
          <a
            href=""
            target="_blank"
            className="bg-gray-800 text-white text-[16px] py-[10px] px-[18px] md:text-[18px] md:py-[12px] md:px-[20px] rounded-3xl hover:opacity-85 ease-in-out duration-300"
          >
            View More
          </a>
        </div>
      </div>
    </FadeInWrapper>
  );
};

export default Hero;
