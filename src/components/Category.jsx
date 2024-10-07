import React from "react";
import categorywrapper1 from "../assets/wrapperImg.png";
import categorywrapper2 from "../assets/winter fit.png";
import FadeInWrapper from "../animations/fadeInWrapper";
import categorywrapper3 from "../assets/wrapperImg2.png";
import CarouselSlider from "../animations/carouselSlider";

const Category = () => {
  const bannerImages = [categorywrapper1, categorywrapper3];

  return (
    <FadeInWrapper>
      <div className="h-fit" id="category">
        <div className="w-full font-bebas text-center md:mt-20 ">
          <h1 className="font-bebas md:text-[40px] text-[30px]">Summer Slam</h1>
        </div>
        <div>
          {/* Reusable carousel with images */}
          <CarouselSlider images={bannerImages} duration={4000} />
        </div>
        <div className="flex flex-row gap-1 xl:gap-14 sm:gap-10 h-fit w-full md:mt-24 md:mb-12 mt-10 mb-10">
          <div className="md:pl-12 pl-4 w-[50vw]">
            <img
              src={categorywrapper2}
              className="object-contain w-[40vw] h-auto"
            />
          </div>
          <div className="flex flex-col gap-4 w-[50vw]">
            <h1 className="font-bebas md:text-[40px] text-[30px]">
              Winter Couture
            </h1>
            <p className="text-[14px] md:text-base lg:text-base lg:pr-4 xl:text-2xl text-wrap">
              Discover our collection of comfortable hoodies for men, including
              jerseys and knitted styles finished with signature prints,
              patches, and embroidery.
            </p>
            <div className="mt-6">
              <a
                href=""
                target="_blank"
                className="bg-gray-800 text-white text-[16px] py-[10px] px-[18px] md:text-[18px] md:py-[12px] md:px-[20px] rounded-3xl hover:opacity-85 ease-in-out duration-300"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </FadeInWrapper>
  );
};

export default Category;
