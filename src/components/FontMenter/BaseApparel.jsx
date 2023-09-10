import React from "react";
import Backgroundimg from "../../Assets/Images/Base img/bg-pattern-desktop.svg";
import HeroImgDes from "../../Assets/Images/Base img/hero-desktop.jpg";
import HeroImgMob from "../../Assets/Images/Base img/hero-mobile.jpg";
import Arrowicon from "../../Assets/Images/Base img/icon-arrow.svg";
import LogoIcon from "../../Assets/Images/Base img/logo.svg";
import errorIcon from "../../Assets/Images/Base img/icon-error.svg";

const BaseApparel = () => {
  return (
    <div className="justify-center flex flex-row	items-center  	h-screen w-screen">
      {/*Description*/}
      <div className="p-8">
        <div className="flex flex-row">
          <div>
            <img src={Backgroundimg} alt="" className="w-full h-screen" />
          </div>
          <div>
            <img src={LogoIcon} alt="" srcset="" />
          </div>
          <h1> We're coming soon</h1>
        </div>
        <span>
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </span>
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
