import React from "react";
import Backgroundimg from "../../Assets/Images/Base img/bg-pattern-desktop.svg";
import HeroImgDes from "../../Assets/Images/Base img/hero-desktop.jpg";
import HeroImgMob from "../../Assets/Images/Base img/hero-mobile.jpg";
import Arrowicon from "../../Assets/Images/Base img/icon-arrow.svg";
import LogoIcon from "../../Assets/Images/Base img/logo.svg";
import errorIcon from "../../Assets/Images/Base img/icon-error.svg";

const BaseApparel = () => {
  return (
    <div className="justify-center flex flex-col md:flex-col lg:flex-row bg-slate-200 md:bg-slate-200 lg:bg-transparent items-center h-screen w-screen">
      {/*Description*/}
      <div className="p-8">
        <div className="flex flex-row ">
          <img
            src={Backgroundimg}
            alt=""
            className="w-full h-full hidden  md:hidden lg:block"
          />
          <div className="absolute top-20 left-10">
            <img src={LogoIcon} alt="" srcset="" />
          </div>
        </div>
        <div>
          <h1> We're coming soon</h1>
          <span>
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </span>
        </div>
        <div>
          <input
            type="text"
            className="rounded-full p-4"
            placeholder="Email Address"
          />
          <button class="rounded-full bg-yellow-500 p-4">
            <img src={Arrowicon} alt="" srcset="" />
          </button>
        </div>
      </div>

      {/*RightSideImage*/}
      <div className="">
        <img
          src={HeroImgDes}
          alt=""
          className="hidden md:hidden lg:block lg:h-screen "
        />
        <img
          src={HeroImgMob}
          alt=""
          className="block md:block lg:hidden md:w-screen"
        />
      </div>
    </div>
  );
};

export default BaseApparel;
