import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
              <h5 className="text-headingColor font-[600] text-[16px]">
                Hello Welcome
              </h5>
              <h1
                data-aos="fade-up"
                data-aos-offset="500"
                data-aos-easing="ease-in-sine"
                className="text-headingColor font-[800] text-[32px] sm:text-[40px] sm:leading-[46px] mt-5"
              >
                I'm Joel Mathew <br />
                Software Developer
              </h1>
              <div
                data-aos="fade-right"
                data-aos-offset="500"
                data-aos-delay="300"
                className="flex items-center gap-6 mt-0"
              >
                <a href="#contact">
                  <button className="">
                    <FontAwesomeIcon icon={faEnvelope} />
                    Hire Me
                  </button>
                </a>
                <a href="#portfolio">See portfolio</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
