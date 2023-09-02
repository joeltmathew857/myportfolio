import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCogs } from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faGithub,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import CountUp from "react-countup";

const Body = () => {
  return (
    <div className="pt-10">
      <div className="container pt-14">
        <div className="md:flex items-center justify-center sm:flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <div
              data-aos="fade-right"
              data-aos-offset="500"
              data-aos-easing="ease-in-sine"
            >
              {/* Section: Greeting */}
              <h5 className="text-headingColor font-[600] text-[16px]">
                Hello Welcome
              </h5>
              {/* Section: Main Heading */}
              <h1
                data-aos="fade-up"
                data-aos-offset="500"
                data-aos-easing="ease-in-sine"
                className="text-headingColor font-[800] text-[32px] sm:text-[40px] sm:leading-[46px] mt-5"
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
                data-aos="fade-up-right"
                data-aos-offset="500"
                data-aos-delay="300"
                className="flex gap-2 text-headingColor mt-14 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
              >
                <span>
                  <FontAwesomeIcon
                    icon={faCogs}
                    size="1x"
                    className="text-smallTextColor"
                  />
                </span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi,
                doloremque iusto? Error, beatae vero odio eaque consequuntur
                assumenda recusandae amet atque alias quos sit consequatur.
                Totam sequi perspiciatis atque odit?
              </p>
              {/* Section: Social Media Icons */}
              <div className="flex flex-center gap-9 mt-24">
                <span className="text-smallTextColor text-[20px] font-[600]">
                  Follow Me:
                </span>
                <span>
                  <a href="#youtube">
                    <FontAwesomeIcon
                      icon={faYoutube}
                      size="2x"
                      style={{ color: "red" }}
                    />
                  </a>
                </span>
                <span>
                  <a href="#github">
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="2x"
                      style={{ color: "black" }}
                    />
                  </a>
                </span>
                <span>
                  <a href="#instagram">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      size="2x"
                      style={{ color: "#E1306C" }}
                    />
                  </a>
                </span>
                <span>
                  <a href="#facebook">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      size="2x"
                      style={{ color: "#1877F2" }}
                    />
                  </a>
                </span>
              </div>
            </div>
            {/* Body-Img */}
            <div className="basis-1/3 mt-10 sm:mt-0">
              <figure className="flex items-center justify-center ">
                <img
                  src="https://pbs.twimg.com/media/DlSruwNW0AAYQcE.jpg"
                  alt=""
                  className="rounded-full w-80 h-96"
                />
              </figure>
            </div>
            {/* Section: Years of Experience */}
            <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:flex-col md:justify-end md:text-end">
              <div className="mb-10">
                <h2 className="text-smallTextColor  font-[700] text-[32px]">
                  <CountUp start={0} end={6} duration={2} suffix="+" />
                </h2>
                <h4 className="text-smallTextColor text-[18px] font-[600]">
                  Years of experience
                </h4>
              </div>
            </div>
            {/* Section: Number of Projects and Success Rate */}
            <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:flex-col md:justify-end md:text-end">
              <div className="mb-10">
                <h2 className="text-smallTextColor  font-[700] text-[32px]">
                  <CountUp start={0} end={10} duration={2} suffix="+" />
                </h2>
                <h4 className="text-smallTextColor text-[18px] font-[600]">
                  Number of projects
                </h4>
              </div>
              <div className="mb-10">
                <h2 className="text-smallTextColor  font-[700] text-[32px]">
                  <CountUp start={0} end={100} duration={2} suffix="%" />
                </h2>
                <h4 className="text-smallTextColor text-[18px] font-[600]">
                  Success rate
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
