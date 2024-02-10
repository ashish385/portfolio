import React from "react";
// import HeroImage from "../assets/Ashish_cover.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[95vh] flex items-center  bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 "
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <p className="text-lg text-accent mb-[15px]">
              Hey, I'm Ashish Soni
            </p>
            <h1 className="text-3xl leading-[44px] md:text-5xl md:leading-tight lg:text-6xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
              I Build & Design <br /> Web Interfaces.
            </h1>
            <p className="pt-4 pb-5 md:pt-6 md:pb-8  max-w-[480px] text-lg text-center lg:text-left">
              "I am a skilled and passionate web designer with a proven track
              record of creating visually appealing and user-friendly websites."
            </p>
            <button className="btn btn-md bg-accent hover:bg-accent-hover rounded-md md:btn-lg transition-all duration-300">
              Hire me
            </button>
          </div>
          {/* <div className="hidden md:flex flex-1 justify-end items-end h-full ">
            <img src={HeroImage} alt="" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
