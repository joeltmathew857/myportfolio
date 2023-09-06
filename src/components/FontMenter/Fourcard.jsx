import React from "react";
import Teambuilder from "../../Assets/Images/Svg/icon-team-builder.svg";
import Calculator from "../../Assets/Images/Svg/icon-calculator.svg";
import Karma from "../../Assets/Images/Svg/icon-karma.svg";
import Supervisor from "../../Assets/Images/Svg/icon-supervisor.svg";

const Fourcard = () => {
  return (
    <div className="flex justify-center items-center bg-gray-200 rounded-md w-full h-screen">
      {/* main */}
      <div className="flex flex-col">
        {/* Title */}
        <div className="flex lg:flex-col md:flex-row justify-center items-center">
          <h1 className="text-gray-600 text-2xl flex flex-col">
            Reliable, efficient delivery{" "}
            <span className="font-bold justify-center items-center">
              Powered by Technology
            </span>
          </h1>
          <div className="text-sm text-center py-4 text-slate-400 font-roboto text-xs flex flex-col select-all">
            Our Artificial Intelligence powered tools use millions of project
            data
            <span> points to ensure that your project is successful</span>
          </div>
        </div>
        {/* Box-container */}
        <div className="flex flex-col lg:flex-row sm:flex-row gap-3 p-16 md:flex-row gap-3 p-16">
          {/*first-box*/}
          <div className="box-content  bg-white rounded-md h-32 w-32 p-4 drop-shadow-md border-t-4 border-teal-300 drop-shadow-2xl h-44 p-4 w-64 ">
            <div className="flex flex-col">
              <h1 className="font-semibold">Supervisor </h1>
              <span className="text-xs text-slate-400 py-2">
                Monitors activity to identify project roadblocks
              </span>
            </div>
            <img className="py-10 pl-40" src={Supervisor} alt="Lens" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="box-content  bg-white rounded-md h-32 w-32 p-4 drop-shadow-md border-t-4 border-red-500 drop-shadow-2xl h-44 p-4 w-64 green-border">
              <div className="flex flex-col">
                <h1 className=" font-semibold ">Team Builder</h1>
                <span className="text-xs text-slate-400 py-2">
                  Scans our talent network to create the optimal team for your
                  project
                </span>
              </div>
              <img className="py-10 pl-40" src={Teambuilder} alt="Lens" />
            </div>
            <div className="box-content bg-white rounded-md h-32 w-32 p-4 drop-shadow-md border-t-4 border-yellow-500 drop-shadow-2xl h-44 p-4 w-64 yellow-border">
              <div className="flex flex-col">
                <h1 className="font-semibold">Karma </h1>
                <span className="text-xs text-slate-400 py-2">
                  Regularly evaluates our talent to ensure quality
                </span>
              </div>
              <img className="py-10 pl-40" src={Karma} alt="Lens" />
            </div>
          </div>

          <div className="box-content align-middle bg-white rounded-md h-32 w-32 p-4 drop-shadow-md border-t-4 border-blue-500 drop-shadow-2xl h-44 p-4 w-64 blue-border">
            <div className="flex flex-col">
              <h1 className="font-semibold ">Calculator </h1>
              <span className="text-xs text-slate-400 py-2">
                Uses data from past projects to provide better delivery
                estimates
              </span>
            </div>
            <img className="py-10 pl-40" src={Calculator} alt="Lens" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourcard;
