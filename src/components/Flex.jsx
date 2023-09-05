import React from "react";

const Flex = () => {
  return (
    <div className="flex">
      <div className="bg-yellow-200 text-white p-auto sm:bg-green-200 md:bg-green-700 lg:bg-gray-600 box-content h-32 w-32 p-4 border-4 text-left sm:text-center md:text-right lg:text-bottom">
        <div className="flex-grow relative top-0 left-0">
          <div className="box-border h-32 w-32 p-4 border-4 bg-yellow-200 flex items-center">
            01
          </div>
        </div>
      </div>
      <div className="flex-grow sticky top-10 left-0">
        <div className="box-border h-32 w-32 p-4 border-4 bg-gray-500 flex items-center">
          02
        </div>
      </div>

      <div className="flex-grow absolute top-0 left-10">
        <div className="box-border h-32 w-32 p-4 border-4 bg-gray-400 flex items-center">
          03
        </div>
      </div>
    </div>
  );
};

export default Flex;
