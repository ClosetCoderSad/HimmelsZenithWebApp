import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CarouselSlider = ({ images, duration = 3000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, duration);

    return () => clearInterval(interval);
  }, [images.length, duration]);

  const slideVariants = {
    enter: { x: "100%" }, // Slide from the right
    center: { x: 0 }, // Center the image
    exit: { x: "-100%" }, // Slide to the left
  };

  return (
    <div className="relative w-full overflow-hidden min-h-[195px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[500px] xl:min-h-[670px]">
      <AnimatePresence initial={false}>
        {images.map((image, index) =>
          index === currentImageIndex ? (
            <motion.div
              key={index}
              className="absolute inset-0 w-full h-full"
              initial="enter"
              animate="center"
              exit="exit"
              variants={slideVariants}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <img
                src={image}
                className="w-full h-full object-cover" // Maintain aspect ratio and cover the space
                alt={`Banner ${index}`}
              />
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Static "Shop Now" button */}
      <div className="absolute bottom-5 md:bottom-10 xl:right-[50%] lg:right-[45%] md:right-[44%] right-[39%] z-10">
        <a
          href="#"
          target="_blank"
          className="bg-gray-800 text-white text-[16px] py-[10px] px-[18px] md:text-[18px] md:py-[12px] md:px-[20px] rounded-3xl hover:opacity-85 ease-in-out duration-300"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default CarouselSlider;
