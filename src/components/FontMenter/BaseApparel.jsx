import React from "react";
import Backgroundimg from "..//../Assets/Images/Base img/bg-pattern-desktop.svg";

const BaseApparel = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="">
        <img src={Backgroundimg} alt="" className="w" />
      </div>
      <div>
        <h1> We're coming soon</h1>
        <span>
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </span>
      </div>
      <div> Email Address</div>
    </div>
  );
};

export default BaseApparel;
