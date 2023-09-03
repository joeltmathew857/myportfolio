import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCogs } from "@fortawesome/free-solid-svg-icons";
import Body from "../Body/experince";

const Body = () => {
  return (
    <div className="pt-10">
      <div className="container pt-14">
        <div className="md:flex items-center justify-center sm:flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-8">
            <div
              data-aos="fade-right"
              data-aos-offset="500"
              data-aos-easing="ease-in-sine"
            >
              {/* Section: Greeting */}
              <h5 className="text-headingColor font-[600] text-[26px]">
                Hello Welcome
              </h5>
              {/* Section: Main Heading */}
              <h1
                data-aos="fade-right"
                data-aos-offset="500"
                data-aos-easing="ease-in-sine"
                className="text-headingColor font-[500] text-[22px] sm:text-[40px] sm:leading-[46px] mt-5"
              >
                I'm Joel Mathew <br />
                Software Developer
              </h1>
              {/* Section: Call to Action Buttons */}
              <div
                data-aos="fade-right"
                data-aos-offset="500"
                data-aos-delay="300"
                className="flex items-center gap-6 mt-0"
              >
                <a href="#contact">
                  <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-out duration-300 py-2 px-2 rounded-xl">
                    <FontAwesomeIcon icon={faEnvelope} />
                    Hire Me
                  </button>
                </a>
                <a
                  href="#portfolio"
                  className="text-tailwind.config.js font-[600] text-[16px] border-b border-soild  border-smallTextColor"
                >
                  See portfolio
                </a>
              </div>
              {/* Section: About Me */}
              <p
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-delay="300"
                className="flex gap-1 text-headingColor mt-14 font-[500] text-[14px] leading-5 sm:pl-14 sm:pr-10"
              >
                <span>
                  <FontAwesomeIcon
                    icon={faCogs}
                    size="1x"
                    className="text-smallTextColor"
                  />
                </span>
                Hello there! I'm Joel Mathew, a passionate and enthusiastic
                software developer eager to embark on an exciting journey in the
                world of technology. As a fresher, I bring a fresh perspective,
                a hunger for learning, and a drive to excel in the ever-evolving
                field of software development.
              </p>
            </div>
          </div>
          {/* Body-Img */}
          <div
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="300"
            className="basis-1/3 mt-10 sm:mt-0"
          >
            <figure className="flex items-center justify-center">
              <img
                src="https://pbs.twimg.com/media/DlSruwNW0AAYQcE.jpg"
                alt=""
                className="rounded-full w-64 h-80"
              />
            </figure>
          </div>
          {/* Section: Years of Experience */}
          <ExperienceSection />
        </div>
      </div>
    </div>
  );
};

export default Body;
