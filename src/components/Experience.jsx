import React from "react";
import CountUp from "react-countup";

const ExperienceSection = () => {
  return (
    <div
      data-aos="fade-left"
      data-aos-offset="100"
      data-aos-delay="300"
      className="md:basis-1/4 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end"
    >
      <div className="mb-10">
        <h2 className="text-smallTextColor  font-[600] text-[32px]">
          <CountUp start={0} end={10} duration={2} suffix="+" />
        </h2>
        <h4 className="text-smallTextColor text-[18px] font-[600]">
          Number of projects
        </h4>
      </div>
      <div
        data-aos="fade-left"
        data-aos-offset="100"
        data-aos-delay="300"
        className="mb-10"
      >
        <h2 className="text-smallTextColor  font-[700] text-[32px]">
          <CountUp start={0} end={100} duration={2} suffix="%" />
        </h2>
        <h4 className="text-smallTextColor text-[18px] font-[600]">
          Success rate
        </h4>
      </div>
      <div
        data-aos="fade-left"
        data-aos-offset="100"
        data-aos-delay="300"
        className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:flex-col md:justify-end md:text-end"
      >
        <div className="mb-10">
          <h2 className="text-smallTextColor  font-[700] text-[32px]">
            <CountUp start={0} end={16} duration={2} suffix="+" />
          </h2>
          <h4 className="text-smallTextColor text-[18px] font-[600]">
            Years of experience
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
