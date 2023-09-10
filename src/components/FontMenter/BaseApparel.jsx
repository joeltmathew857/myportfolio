import React from "react";
import Backgroundimg from "../../Assets/Images/Base img/bg-pattern-desktop.svg";
import HeroImgDes from "../../Assets/Images/Base img/hero-desktop.jpg";
import HeroImgMob from "../../Assets/Images/Base img/hero-mobile.jpg";
import Arrowicon from "../../Assets/Images/Base img/icon-arrow.svg";
import LogoIcon from "../../Assets/Images/Base img/logo.svg";
import errorIcon from "../../Assets/Images/Base img/icon-error.svg";

const BaseApparel = () => {
  return (
    <div className="flex justify-center relative">
      {/* Background Image */}
      <img src={Backgroundimg} alt="Background" className="w-full" />
      <img src={LogoIcon} alt="" srcset="" className="w-20 h-10" />
      {/* Text Overlay */}
      <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-8xl font-light">We're coming soon</h1>
        <p>
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        <form>
          <input
            type="email"
            placeholder="Email Address"
            className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
          >
            button
          </button>
        </form>
      </div>
      {/* Optional: You can uncomment the following code to display additional images */}
      <div>
        <img
          src={HeroImgDes}
          alt="DesktopBackground"
          className="w-full h-screen sm:h-screen sm:w-screen md:hidden lg:block"
        />
        <img
          src={HeroImgMob}
          alt="MobileBackground"
          className="w-16 md:w-40 lg:w-96 md:block lg:hidden"
        />

        <img src={errorIcon} alt="" srcset="" />
      </div>
      <div></div>
    </div>
  );
};

export default BaseApparel;
