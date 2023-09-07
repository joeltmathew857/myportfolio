import React from "react";

const Flex = () => {
  return (
    <div className="flex  flex-wrap sm:mt-8  lg:flex-row justify-center  items-center lg:max-w">
      <div className="box bg-gray-600 sm:bg-blue-900 lg:bg-blue-300 h-32 w-32 p-4 border-4 text-center flex items-center justify-center">
        01
      </div>

      <div className="box  bg-yellow-500 h-32 w-32 p-4 border-4 text-center flex items-center justify-center lg:items-center">
        02
      </div>

      <div className="box  bg-gray-300 h-32 w-32 p-4 border-4 text-center flex items-center justify-center lg:items-center">
        03
      </div>
      <div className="box bg-gray-400 h-32 w-32 p-4 border-4 text-center flex items-center justify-center">
        04
      </div>

      <div className="box bg-gray-500 h-32 w-32 p-4 border-4 text-center flex items-center justify-center">
        05
      </div>
      <div className="box  bg-blue-500 h-32 w-32 p-4 border-4 text-center flex items-center justify-center">
        06
      </div>

      <div className="box bg-blue-400 h-32 w-32 p-4 border-4 text-center flex items-center justify-center">
        07
      </div>
      <div className="box bg-green-400 h-32 w-32 p-4 border-4 text-center flex items-center justify-center">
        08
      </div>
      <div className="box bg-purple-400 h-32 w-32 p-4 border-4 text-center flex items-center justify-center">
        09
      </div>
      <div className="box bg-orange-400 h-32 w-32 p-4 border-4 text-center flex items-center justify-center">
        10
      </div>
    </div>
  );
};

export default Flex;
