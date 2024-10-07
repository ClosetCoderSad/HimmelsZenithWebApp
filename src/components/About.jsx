import React, { useState } from "react";
import aboutImg1 from "../assets/Hlogo2.png";
import videofile from "../assets/AQPU3OoPq8Os7fu9HG3kv03kLyWRj1XDAdAdKjinwukHxHhFEqxFlP7QUP9ivt76_ffHCyfdh7MSfqvWBoXoWUNY_V1.mp4";
import aboutImg3 from "../assets/Hlogo.jpg";
import FadeInWrapper from "../animations/fadeInWrapper";

const About = () => {
  // Define a state to track whether the video is muted
  const [isMuted, setIsMuted] = useState(true);

  // Function to toggle mute/unmute
  const handleVideoClick = () => {
    setIsMuted((prevState) => !prevState); // Toggle the mute state
  };


  return (
    <FadeInWrapper>
      <div className="h-fit w-full pb-12" id="about">
        <div className="w-full mt-28 mb-10">
          <p className="md:text-base lg:text-xl xl:text-2xl text-center">
            To know latest trend sets follow Instagram
          </p>
        </div>
        <div className="flex flex-row w-full relative bg-customDarkRed gap-[1px]">
          <img src={aboutImg1} className="w-1/3 opacity-85" />
          <video className="w-1/3 opacity-85" autoPlay muted={isMuted} loop playsInline onClick={handleVideoClick}>
            <source src={videofile} type="video/mp4"/>
          </video>
          <img src={aboutImg3} className="w-1/3 opacity-85" />
        </div>
      </div>
    </FadeInWrapper>
  );
};

export default About;
