import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faYoutube,
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-700		 py-12 mt-8">
        <div className="container mx-auto text-center text-gray-400">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
        {/* Section: Social Media Icons */}
        <div className="flex flex-center gap-9 mt-24">
          <span className="text-white text-[20px] font-[600]">Follow Me:</span>
          <span>
            <a href="#youtube">
              <FontAwesomeIcon
                icon={faYoutube}
                size="2x"
                style={{ color: "red" }}
              />
            </a>
          </span>
          <span>
            <a href="#github">
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                style={{ color: "black" }}
              />
            </a>
          </span>
          <span>
            <a href="#instagram">
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                style={{ color: "#E1306C" }}
              />
            </a>
          </span>
          <span>
            <a href="#twitter">
              {" "}
              {/* Change the href to "#twitter" */}
              <FontAwesomeIcon
                icon={faTwitter}
                size="2x"
                style={{ color: "#1DA1F2" }}
              />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
