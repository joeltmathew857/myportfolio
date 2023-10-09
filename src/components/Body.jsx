import React from "react";
import Greeting from "../components/Greeting";
import Experience from "./Experience";

const Body = () => {
  return (
    <div className="pt-10">
      <div className="container pt-14">
        <div className="md:flex items-center justify-center sm:flex-col md:flex-row">
          <Greeting />
          {/* Body-Img */}
          <div
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="200"
            className="basis-1/3 mt-10 sm:mt-0"
          >
            <figure className="flex items-center justify-right">
              <img
                src="https://images.pexels.com/photos/9124511/pexels-photo-9124511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                className="rounded-full w-64 h-80"
              />
            </figure>
          </div>
          {/* Section: Years of Experience */}
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default Body;
