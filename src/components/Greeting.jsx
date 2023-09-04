import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCogs } from "@fortawesome/free-solid-svg-icons";

const Greeting = () => {
  return (
    <div className="flex w-full p-0">
      {/* Greeting Section */}
      <div
        className="w-2/3 p-8"
        data-aos="fade-right"
        data-aos-offset="500"
        data-aos-easing="ease-in-sine"
      >
        <h5 className="text-headingColor font-[400] text-[50px]">
          Hello Welcome
        </h5>
        <h1
          data-aos="fade-right"
          data-aos-offset="500"
          data-aos-easing="ease-in-sine"
          className="text-headingColor font-[300] text-[22px] sm:text-[50px] sm:leading-[66px] mt-5"
        >
          I'm Joel Mathew <br />
          Software Developer
        </h1>
        {/* About Me Section */}
        {/* <div className="w-1/3 p-8">
          <p className="text-headingColor font-[500] text-[14px] leading-5">
            <span>
              <FontAwesomeIcon
                icon={faCogs}
                size="1x"
                className="text-smallTextColor"
              />
            </span>
            Hello there! I'm Joel Mathew, a passionate and enthusiastic software
            developer eager to embark on an exciting journey in the world of
            technology. As a fresher, I bring a fresh perspective, a hunger for
            learning, and a drive to excel in the ever-evolving field of
            software development.
          </p>
        </div> */}

        <div
          data-aos="fade-right"
          data-aos-offset="500"
          data-aos-delay="300"
          className="flex items-center gap-6 mt-5"
        >
          <a href="#contact">
            <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-out duration-300 py-2 px-2 rounded-xl">
              <FontAwesomeIcon icon={faEnvelope} />
              Hire Me
            </button>
          </a>
          <a
            href="#portfolio"
            className="text-tailwind.config.js font-[600] text-[16px] border-b border-soild border-smallTextColor"
          >
            See portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
