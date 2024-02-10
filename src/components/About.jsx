import React from "react";
import AboutImg from "../assets/Ashish_cover.jpeg";

const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-24">
          <img
            src={AboutImg}
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            alt={""}
          />
          <div className="flex flex-col items-center text-center lg:text-start lg:items-start">
            <div className="flex flex-col lg:text-start">
              <h2 className="text-3xl lg:text-4xl  font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opcity-40 before:-top-[2rem] before:hidden before:lg:block">
                Ashish Soni
              </h2>
              <p className="mb-4 text-accent"> Web Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                I'm a skilled and passionate web designer with experience in
                creating visually appealing and user-friendly websites. I have a
                strong understanding of design and a keen eye for detail. I am
                proficient in HTML, CSS, JavaScript, React and Tailwind css as
                well as MERN stack developer.
              </p>
            </div>
            <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all rounded-md">
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
