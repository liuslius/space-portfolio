import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="realative flex flex-xol h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover"
      >
        <source src="/space-portfolio/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};
export default Hero;
